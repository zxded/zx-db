<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Statement"%>
<%@page import="main.DBagent"%>
<%@page import="main.Prihod"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="java.util.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>



<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Операции</title>
	<link rel="stylesheet" href="css/main.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" type="text/css" href="css/datatables.css"/>
	<script type="text/javascript" language="javascript" src="js/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="js/datatables.min.js"></script>
	<script type="text/javascript" src="js/dataTables.select.min.js"></script>
	<script type="text/javascript" class="init">
		$(document).ready(function() {
			
			document.getElementById("doc_id").value = 1;
			var doc_id = document.getElementById("doc_id").value;

			//ИНИЦИАЛИЗАЦИЯ ТАБЛИЦЫ №1
			var table1 = $("#table1").DataTable({
				ajax: {
					url: "Docs",
					type: "GET",
					dataType: "json",
					dataSrc: ""
				},
				columns: [
					{ data: "num"},
					{ data: "date"},
					{ data: "doc_type"}
				],
				aoColumnDefs: [
					{sClass: 'num','aTargets':[0], sWidth: '30px'},
					{sClass: 'date','aTargets':[1], sWidth: '60px'},
					{sClass: 'type','aTargets':[2], sWidth: '50px'},
				],
				select: {
					style: "single",
					toggleable: false
				},
				"initComplete": function() {
					//table1.row(":eq(0)").select();
					table1.page('last').draw('page');
					table1.row( ':last', { order: 'applied' } ).select();
				}
			});

			var doc_num = table1.cell(".selected", 0).data();

			//ОБРАБОТКА СОБЫТИЯ ПРИ ВЫБОРЕ СТРОКИ В DOCS
			table1.on("select", function (e, dt, type, indexes) {
				doc_num = table1.cell(".selected", 0).data();
				document.getElementById("doc_id").value = doc_num;
				document.getElementById("doc_id_save").value = doc_num;
				$.ajax({
					url: "Operations?doc_id="+doc_num,
					type: "GET",
					dataType: "json",
					success: function (data) {
						table2.clear().draw();
						table2.rows.add(data).draw();
					}
				});
			});

			//ИНИЦИАЛИЗАЦИЯ ТАБЛИЦЫ №2
			var table2 = $("#table2").DataTable({
				ajax: {
					url: "Operations?doc_id="+doc_id,
					type: "GET",
					dataType: "json",
					dataSrc: ""
				},
				columns: [
					{
						data: "num",
						render: function (data, type, row, meta) {
							return meta.row + meta.settings._iDisplayStart + 1;
						}
					},
					{data: "id"},
					{data: "item"},
					{data: "quantity"}
				],
				aoColumnDefs: [
					{sClass: 'eq','aTargets':[0], sWidth: '30px'},
					{sClass: 'hiddenID','aTargets':[1]},
					{sClass: 'item','aTargets':[2], sWidth: '400px'},
					{sClass: 'q','aTargets':[3], sWidth: '70px'}
				]
			});

			EditDoc_button.onclick = function(){
				$.get("EditDoc", function(responseText) {
					var id_new = parseInt(responseText) + 1;
					document.getElementById("id_new").value = id_new;
				});
			}
			
			//НАЖАТИЕ КНОПКИ "УДАЛИТЬ"
			DeleteDoc_button.onclick = function(){
				$("#doc_num_text").html("Документ №" + doc_num + " будет удален! Продолжить?");
				document.location.href = "#DeleteDocConfirm_window";
			}

			//ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ ДОКУМЕНТА
			DeleteDocConfirm_button.onclick = function(){
				$.ajax ({
					url: "DeleteDoc",
					type: "POST",
					data: "doc_num="+doc_num,
					success: function() {
						alert("Документ №" + doc_num + " удален (ajax post success)");
					}
				});
				document.location.href = "operations.jsp";
			}

		});


	</script>
	
</head>

<body>
	<!-- МЕНЮ -->
	<div id="start"></div>
	<div class="start_space"></div>
	<header class="header">
		<div class="title"><h1>Операции</div>
		<div class="b1">
			<p>1. Изменить документ (изменение, удаление, добавление)?
			<p>2! ?Расчет остатков при приходе/расходе?
			<p>3. При отмене удаления опять выбирается последняя строка таблицы документов (нужно оставить текущую)
			<br>
		</div>
		<div class="menu">
			<a href="catalog.jsp"><div class="button w1">Каталог</div></a>
			<div class="button w1 button_on">Операции</div>
		</div>
		<div class="menu">
			<a href="doc.jsp?doc_type=1"><div class="button w1">Приход</div></a>
			<a href="doc.jsp?doc_type=2"><div class="button w1">Расход</div></a>
			<div id="EditDoc_button" class="button w1">(Изменить)</div>
			<div id="DeleteDoc_button" class="button w1">Удалить</div>
		</div>
		<input class="none" id="doc_id" name="doc_id" type="text" width="3">
		<input class="none" id="doc_id_save" name="doc_id_save" type="text" width="3">
	</header>

	<div class="wrapper">
		<div class="container">

			<div class="operations_section">
				<div class="docs">
					<table id="table1">
						<thead>
							<tr>
								<th>№</th>
								<th>Дата</th>
								<th>Тип</th>
							</tr>
						</thead>
					</table>
				</div>

				<div class="operations">
					<table id="table2">
						<thead>
							<tr>
								<th>№</th>
								<th class="hiddenID">ID</th>
								<th>Наименование</th>
								<th>Количество</th>
							</tr>
						</thead>
					</table>
				</div>

			</div>

		</div>
	</div>

	<!-- МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ ДОКУМЕНТА -->
	<div id="DeleteDocConfirm_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<div class="menu">
					<p id="doc_num_text">
				</div>
				<br><br>
				<div class="menu">
					<div id="DeleteDocConfirm_button" class="button w1">Да</div>
					<a href="operations.jsp"><div class="button w1">Нет</div></a>
				</div>
			</div>
		</div>
	</div>

</body>

</html>
