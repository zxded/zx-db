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
			
			document.getElementById("doc_id_selected_field").value = 1;
			var doc_id_selected = document.getElementById("doc_id_selected_field").value;

			//ИНИЦИАЛИЗАЦИЯ ТАБЛИЦЫ №1
			var table1 = $("#table1").DataTable({
				ajax: {
					url: "Docs",
					type: "GET",
					dataType: "json",
					dataSrc: ""
				},
				columns: [
					{data: "id"},
					{data: "date"},
					{data: "doc_type"},
					{data: "contragent"},
					{data: "processed"},
					{data: "info"}
				],
				columnDefs: [
					{width: '40px', targets: [0]},
					{width: '80px', targets: [1]},
					{width: '60px', targets: [2]},
					{width: '150px', targets: [3]},
					{width: '70px', targets: [4],
						render: function(data, type) {
							{return (data == '1') ? 'Да' : 'Нет'}
						}
					},
					{sClass: 'displayNone', targets: [5]}
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

			//var doc_id_selected = table1.cell(".selected", 0).data();
			//alert("doc_id_selected="+doc_id_selected);

			//ОБРАБОТКА СОБЫТИЯ ПРИ ВЫБОРЕ СТРОКИ В DOCS
			table1.on("select", function (e, dt, type, indexes) {
				doc_id_selected = table1.cell(".selected", 0).data();
				doc_date = table1.cell(".selected", 1).data();
				doc_type = table1.cell(".selected", 2).data();
				contragent = table1.cell(".selected", 3).data();
				processed = table1.cell(".selected", 4).data();
				if (processed == 1) {$('.switch-btn').addClass('switch-on');}
				document.getElementById("doc_id_selected_field").value = doc_id_selected;
				document.getElementById("doc_id_save").value = doc_id_selected;
				document.getElementById("contragent").value = contragent;
				$.ajax({
					url: "Operations?doc_id="+doc_id_selected,
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
					url: "Operations?doc_id="+doc_id_selected,
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
					{sClass: 'displayNone','aTargets':[1]},
					{sClass: 'item','aTargets':[2], sWidth: '400px'},
					{sClass: 'q','aTargets':[3], sWidth: '70px'}
				],
				fixedColumns: true
			});


			//ИНИЦИАЛИЗАЦИЯ ПОЛНОЙ ТАБЛИЦЫ ДОКУМЕНТА
			var table_doc = $("#table_doc").DataTable({
				ajax: {
					url: "Operations?doc_id="+doc_id_selected,
					type: "GET",
					dataType: "json",
					dataSrc: ""
				},
				columns: [
					{data: "id"},
					{data: "item"},
					{data: "quantity"},
					{data: "price"},
					{data: "summary"}
				],
					aoColumnDefs: [
					{sClass: 'id','aTargets':[0], sWidth: '30px'},
					{sClass: 'item','aTargets':[1], sWidth: '300px'},
					{sClass: 'q_dt','aTargets':[2], sWidth: '40px'},
					{sClass: 'p','aTargets':[3], sWidth: '40px'},
					{sClass: 's','aTargets':[4], sWidth: '50px'}
				],
				fixedColumns: true,
				iDisplayLength: -1
			});

			//ОБРАБОТКА ДВОЙНОГО КЛИКА НА СТРОКЕ С ДОКУМЕНТОМ
			$(table1.table().container()).on('dblclick', 'tr', function () {
				document.getElementById("doc_id_modal").value = doc_id_selected;
				doc_date = table1.cell(".selected", 1).data();
				document.getElementById("doc_date").value = doc_date;
				$("#doc_title").html("Просмотр документа (" + doc_type + ")");
				document.location.href = "#Doc_window";
				$.ajax({
					url: "Operations?doc_id="+doc_id_selected,
					type: "GET",
					dataType: "json",
					success: function (data) {
						table_doc.clear().draw();
						table_doc.rows.add(data).draw();
					}
				});
			});	


			//НАЖАТИЕ КНОПКИ "РЕДАКТИРОВАТЬ (ДОДЕЛАТЬ)"
			EditDoc_button.onclick = function(){
				$.get("EditDoc", function(responseText) {
					var id_new = parseInt(responseText) + 1;
					document.getElementById("id_new").value = id_new;
				});
			}
			
			//НАЖАТИЕ КНОПКИ "УДАЛИТЬ"
			DeleteDoc_button.onclick = function(){
				$("#doc_id_text").html("Документ №" + doc_id_selected + " будет удален! Продолжить?");
				document.location.href = "#DeleteDocConfirm_window";
			}

			//ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ ДОКУМЕНТА
			DeleteDocConfirm_button.onclick = function(){
				//alert("Удаляем документ №" + doc_id_selected);
				$.ajax ({
					url: "DeleteDoc",
					type: "POST",
					data: "doc_id="+doc_id_selected,
					success: function() {
						//alert("Документ №" + doc_id_selected + " удален (ajax post success)");
						document.location.href = "operations.jsp";
					}
				});
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
		<!-- <div class="b1">
			<p>1. Окно карточки документа по двойному клику на нем в таблице
			<p>2. Расчет остатков при приходе/расходе
			<p>3. Редактирование контрагентов.
			<p>4. Изменить документ (изменение, удаление, добавление)?
			<br>
		</div> -->
		<div class="menu">
			<a href="catalog.jsp"><div class="button w1">Каталог</div></a>
			<a href="doc.jsp?doc_type=1"><div class="button w1">Приход</div></a>
			<a href="doc.jsp?doc_type=2"><div class="button w1">Расход</div></a>
			<div id="DeleteDoc_button" class="button w1 displayNoneMobile">Удалить</div>
			<div id="EditDoc_button" class="button w1 displayNone">(Изменить)</div>
		</div>
		<input class="none" id="doc_id_selected_field" name="doc_id_selected_field" type="text" width="3">
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
								<th>Контрагент</th>
								<th>Проведен</th>
								<th class="displayNone">Info</th>
							</tr>
						</thead>
					</table>
				</div>

				<div class="operations">
					<table id="table2">
						<thead>
							<tr>
								<th>№</th>
								<th class="displayNone">ID</th>
								<th>Наименование</th>
								<th>Количество</th>
							</tr>
						</thead>
					</table>
				</div>

			</div>

		</div>
	</div>

	<!-- МОДАЛЬНОЕ ОКНО ДОКУМЕНТА -->
	<div id="Doc_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<div class="title"><h1 id="doc_title">Просмотр документа</div>
					<div class="operations_section">
					<p>Документ № (doc_id!)
					<input class="inp" size="5" id="doc_id_modal" name="doc_id_modal" maxlength="5" type="text">
					<p>от 
					<input class="inp" size="10" id="doc_date" name="doc_date" maxlength="10" type="date">
					<br><br>
					<p>Контрагент: 
					<input class="inp" size="30" id="contragent" name="contragent" maxlength="60" type="text">
					<br><br>
					<p>Проведен
					<div class="switch-btn"></div>
					<br>
				</div>
				<p>Примечание: 
				<input class="inp" size="100" id="info" name="info" maxlength="200" type="text">
				<br><br>
				<table id="table_doc">
					<thead>
						<tr>
							<th>id</th>
							<th>Наименование</th>
							<th>Кол-во</th>
							<th>Цена</th>
							<th>Сумма</th>
						</tr>
					</thead>
				</table>
				
				<div class="menu">
					<a href="#"><div class="button w1">Закрыть</div></a>
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
					<p id="doc_id_text">
				</div>
				<br><br>
				<div class="menu">
					<div id="DeleteDocConfirm_button" class="button w1">Да</div>
					<a href="#"><div class="button w1">Нет</div></a>
				</div>
			</div>
		</div>
	</div>

<script>
	//ПЕРЕКЛЮЧАТЕЛЬ ПРОВЕДЕНИЯ ДОКУМЕНТА
	$('.switch-btn').click(function(){
		if (processed == 0) {
			$(this).addClass('switch-on');
			var doc_id_selected = document.getElementById("doc_id_selected_field").value;
			if (doc_type == "Приход") {doc_type_id=1;}
			else {doc_type_id=2;}
			$.ajax ({
				url: "ProcessDoc",
				type: "GET",
				data: "doc_id="+doc_id_selected+"&doc_type_id="+doc_type_id,
				success: function() {
					//ВОЗВРАЩАЕМСЯ В ОПЕРАЦИИ
					alert("Документ успешно проведен");
					document.location.href = "operations.jsp";
				}
			});
		}
	});
</script>

</body>

</html>

