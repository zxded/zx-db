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
	<title>Расход: новый</title>
	<link rel="stylesheet" href="css/main.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" type="text/css" href="css/datatables.css"/>
	<script type="text/javascript" language="javascript" src="js/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="js/datatables.min.js"></script>
	<script type="text/javascript" src="js/dataTables.select.min.js"></script>
	<script>
		$(document).ready(function() {
			//ПОЛУЧЕНИЕ ПОСЛЕДНЕГО НОМЕРА ДОКУМЕНТА ИЗ БД
			$.get("AddDoc", function(responseText) {
				document.getElementById("doc_id_new").value = parseInt(responseText) + 1;
			});
			//ЗАГРУЗКА ТЕКУЩЕЙ ДАТЫ
			var date = new Date();
			document.getElementById("doc_date_new").value = date.toISOString().slice(0, 10);

			//ИНИЦИАЛИЗАЦИЯ ТАБЛИЦЫ ДОКУМЕНТА
			var table = $("#table").DataTable({
				columns: [
					{'title': 'eq'},
					{'title': 'doc_id'},
					{'title': 'item_id'},
					{'title': 'item'},
					{'title': 'quantity'}
				]
			});

			//ИНИЦИАЛИЗАЦИЯ ТАБЛИЦЫ КАТАЛОГА
			var table_cat = $("#table_cat").DataTable({
				select: true,
				ajax: {
					url: "Catalog",
					type: "GET",
					dataType: "json",
					dataSrc: ""
				},
				columns: [
					{ data: "id"},
					{ data: "item"},
					{ data: "quantity"}
				],
				select: {
					style: "single",
					toggleable: false
				},
			});

			$(table_cat.table().container()).on('dblclick', 'tr', function () {
				var item_id_to_add = table_cat.cell(".selected", 0).data();
				document.getElementById("item_id_to_add").value = item_id_to_add;
				var item = table_cat.cell(".selected", 1).data();
				document.getElementById("item").value = item;
				document.location.href = "#Quantity_window";
				$("#item_q").html(item);
				//setTimeout(focusQ, 1000);
			});
		});

		//ФОКУС НА ПОЛЕ "КОЛИЧЕСТВО"
		function focusQ(){$("#Quantity_window").focus();}

		//Номер строки по-умолчанию для расхода
		var eq_count = 0;

	</script>
	
</head>

<body>
	<div id="start"></div>
	<div class="start_space"></div>
	<header class="header">
		<div class="title"><h1>Расход (новый документ)</div>
		<div class="b1">
			<p>1. Фокус на поле количества
			<p>2. Кол-во по-умолчанию = ""
			<p>3. Проверка пустого количества при записи
			<p>4. Защита от закрытия несохраненного документа
		</div>
		<div class="operations_section">
			<p>Документ № 
			<input class="inp" size="5" id="doc_id_new" name="doc_id_new" maxlength="5" type="text">
			<p>от 
			<input class="inp" size="10" id="doc_date_new" name="doc_date_new" maxlength="10" type="date">
		</div>
		<div class="menu">
			<a href="#AddItemToDoc_window"><div id="AddItemToDoc_button" class="button w1">Подбор</div></a>
			<a href="#"><div id="NewPrihodSave_button" class="button w1">Записать</div></a>
			<a href="operations.jsp"><div class="button w1">Закрыть</div></a>
		</div>
	</header>

	<div class="wrapper">
		<div class="container">
			<div class="operations_section">
				<div class="docs">
					<table id="table">
						<thead>
							<tr>
								<th>№</th>
								<th>doc_id</th>
								<th>id</th>
								<th>Наименование</th>
								<th>Количество</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- МОДАЛЬНОЕ ОКНО ДОБАВЛЕНИЯ ЗАПИСЕЙ В ДОКУМЕНТ-->
	<div id="AddItemToDoc_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<div class="title"><h1>Добавить запись в документ</div>
				<br>
				<table id="table_cat">
					<thead>
						<tr>
							<th>id</th>
							<th>Наименование</th>
							<th>Остаток</th>
						</tr>
					</thead>
				</table>
				<input class="hidden1" type="text" id="item_id_to_add">
				<input class="hidden1" type="text" id="item">
				<input class="hidden1" type="text" id="doc_id_to_add">
				<a href="#"><div class="button w1">Закрыть</div></a>
			</div>
		</div>
	</div>

	<!-- МОДАЛЬНОЕ ОКНО ВВОДА КОЛИЧЕСТВА-->
	<div id="Quantity_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<h1 id="item_q"></h1>
				<div class="menu">
					<p>Введите количество:
					<input class="input input_q" type="text" id="quantity">
				</div>
				<div class="menu">
					<a href="#AddItemToDoc_window"><div id="SaveQuantity_button" class="button w1">Записать</div></a>
					<a href="#AddItemToDoc_window"><div id="CloseQuantityWindow_button" class="button w1">Закрыть</div></a>
				</div>
			</div>
		</div>
	</div>

<script>
	//КНОПКА "СОХРАНИТЬ" В ПРИХОДЕ
	SaveQuantity_button.onclick = function(){
		var item_id_to_add = document.getElementById("item_id_to_add").value;
		var doc_id = document.getElementById("doc_id_new").value;
		var item = document.getElementById("item").value;
		var quantity = document.getElementById("quantity").value;
		eq_count += 1;
		$('#table').DataTable().row.add([eq_count, doc_id, item_id_to_add, item, quantity]).draw();
	}

	//КНОПКА "ЗАПИСАТЬ" В ПРИХОДЕ
	NewPrihodSave_button.onclick = function(){
		//ПЕРЕВОДИМ ДАННЫЕ ИЗ ТАБЛИЦЫ ДОКУМЕНТА В JSON (КРОМЕ ЗАГОЛОВОЧНОЙ СТРОКИ)
		var data = [];
		var $headers = $('#table').find("th");
		var $rows = $('#table').find("tbody tr").each(function(index) {
			$cells = $(this).find("td");
			data[index] = {};
			$cells.each(function(cellIndex){
				data[index][$($headers[cellIndex]).html()] = $(this).html();
			});
		});

		var obj = {};
		obj.data = data;
		var json = JSON.stringify(obj);


		//ДОБАВЛЯЕМ НОВУЮ ЗАПИСЬ В ТАБЛИЦУ docs
		var doc_id_new = document.getElementById("doc_id_new").value;
		var doc_date_new = document.getElementById("doc_date_new").value;
		$.ajax ({
			url: "AddDoc",
			type: "POST",
			data: "doc_id_new="+doc_id_new+"&doc_date_new="+doc_date_new+"&doc_type_id=2",
			success: function() {
				//ПЕРЕДАЕМ JSON В СЕРВЛЕТ 
				$.ajax ({
					url: "AddItems",
					type: "POST",
					contentType: "application/json",
					data: json,
					success: function() {
						//ВОЗВРАЩАЕМСЯ В ОПЕРАЦИИ
						document.location.href = "operations.jsp";
					}
				});
			}
		});
		
		return json;
	}

</script>

</body>

</html>
