<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Statement"%>
<%@page import="main.DBagent"%>
<%@page import="main.AddItem"%>
<%@page import="main.EditItem"%>
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
	<title>Каталог комплектующих</title>
	<link rel="stylesheet" href="css/main.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" type="text/css" href="css/datatables.css"/>
	<script type="text/javascript" language="javascript" src="js/jquery-3.3.1.js"></script>
 	<script type="text/javascript" src="js/datatables.min.js"></script>
 	<script type="text/javascript" src="js/dataTables.select.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			var table = $('#table').DataTable({
				select: true,
				ajax: {
					url: 'Catalog',
					type: 'GET',
					dataType: 'json',
					dataSrc: ''
				},
				columns: [
					{
						data: 'eq',
						render: function (data, type, row, meta) {
							return meta.row + meta.settings._iDisplayStart + 1;
						}
					},
					{ data: 'id'},
					{ data: 'item'},
					{ data: 'quantity'},
					{ data: 'price'}
				],
				aoColumnDefs: [
					{sClass: 'eq','aTargets':[0]},
					{sClass: 'displayNone','aTargets':[1]},
					{sClass: 'item','aTargets':[2], sWidth: '300'},
					{sClass: 'q','aTargets':[3]},
					{sClass: 'p','aTargets':[4]}
				],
				aLengthMenu: [
					[25, 50, 100, 200, -1],
					[25, 50, 100, 200, "Все"]
    			],
    			iDisplayLength: -1,
				select: {
					style: 'single',
					toggleable: false
				},
				"initComplete": function() {
					table.row(':eq(0)').select();
				},
				"order": [[ 2, 'asc' ]]
			});
		});
	</script>
	
</head>

<body>
	<!-- МЕНЮ -->
	<div id="start"></div>
	<div class="start_space"></div>
	<header class="header">
		<div class="title"><h1>Каталог комплектующих</div>
		<div class="menu">
			<a href="operations.jsp"><div class="button w1">Операции</div></a>
			<a href="#add_window"><div id="Add_button_start" class="button w1">Добавить</div></a>
			<a href="#edit_window"><div id="Edit_button_start" class="button w1">Изменить</div></a>
			<div id="Quantity_button_start" class="button w1 displayNone">Количество</div>
		</div>
	</header>

	<div class="wrapper">
		<div class="container">
			<div class="catalog_section">
				<table id="table">
					<thead>
						<tr>
							<th class="eq">№</th>
							<th class="hiddenID">id</th>
							<th class="item">Наименование</th>
							<th class="q">Количество</th>
							<th class="p">Цена</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>

	<!-- МОДАЛЬНОЕ ОКНО ДОБАВЛЕНИЯ ЗАПИСИ В КАТАЛОГ-->
	<div id="add_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<h1>Добавить запись в каталог</h1><br>
				<h1 class="lable">Наименование:</h1>
				<input id="item_new" name="item" maxlength="100" class="input" type="text">
				<div class="menu">
					<a href="#"><div id="AddItem_button" class="button w1">Сохранить</div></a>
					<a href="#"><div class="button w1">Закрыть</div></a>
				</div>
			</div>
		</div>
	</div>
	
	<!-- МОДАЛЬНОЕ ОКНО ИЗМЕНЕНИЯ НАИМЕНОВАНИЯ -->
	<div id="edit_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<h1>Изменить запись</h1><br>
				<h1 class="lable">Новое наименование:</h1>
				<input id="edit_item" name="edit_item" maxlength="100" class="input" type="text">
				<div class="menu">
					<a href="#"><div id="EditItem_button" class="button w1">Сохранить</div></a>
					<a href="#"><div class="button w1">Закрыть</div></a>
				</div>
			</div>
		</div>
	</div>

	<!-- МОДАЛЬНОЕ ОКНО ИЗМЕНЕНИЯ КОЛИЧЕСТВА -->
	<div id="quantity_window" class="popup">
		<a href="#" class="popup_area"></a>
		<div class="popup_body">
			<div class="popup_content">
				<h1>Изменить количество</h1><br>
				<h1 id="item_q"></h1><br>
				<div class="menu">
					<div>Количество:</div>
					<input id="edit_quantity" name="edit_quantity" maxlength="5" class="input input_q" type="text">
					<input id="quantity_id" name="edit_id" class="none" type="text" value="">
				</div>
				<br><br>
				<div class="menu">
					<a href="#"><div id="EditQuantity_button" class="button w1">Сохранить</div></a>
					<a href="#"><div class="button w1">Закрыть</div></a>
				</div>
			</div>
		</div>
	</div>


	<script>
		function focusAdd(){$("#item_new").focus();}
		function focusEdit(){$("#edit_item").focus();}
		function focusQ(){$("#edit_quantity").focus();}

		//КНОПКА "ДОБАВИТЬ" В МЕНЮ
		Add_button_start.onclick = function(){
			document.getElementById("item_new").value = "";
			setTimeout(focusAdd, 500);
		}

		//КНОПКА "ИЗМЕНИТЬ" В МЕНЮ
		Edit_button_start.onclick = function(){
			var item_old = $("#table").DataTable().cell(".selected", 2).data();
			/* $('.selected .item').each(function(){
				var item_old = $(this).text();
				document.getElementById("edit_item").value = item_old;
			}); */
			document.getElementById("edit_item").value = item_old;
			setTimeout(focusEdit, 500);
		}

		//КНОПКА "КОЛИЧЕСТВО" В МЕНЮ
		Quantity_button_start.onclick = function(){
			document.getElementById("quantity_id").value = $("#table").DataTable().cell(".selected", 1).data();
			/* $('.selected .hiddenID').each(function(){
				document.getElementById("quantity_id").value = $(this).text();
			}); */
			var item = $("#table").DataTable().cell(".selected", 2).data();
			/* $('.selected .item').each(function(){
				item = $(this).text();
			}); */
			$("#item_q").html(item);
			/*
			$('.selected .q').each(function(){
				document.getElementById("edit_quantity").value = $(this).text();
			});
			*/
			document.getElementById("edit_quantity").value = $("#table").DataTable().cell(".selected", 3).data();
			setTimeout(focusQ, 500);
		}

		//КНОПКА "СОХРАНИТЬ" ФОРМЫ ДОБАВЛЕНИЯ НОВОГО НАИМЕНОВАНИЯ
		AddItem_button.onclick = function(){
			var item_new = document.getElementById("item_new").value;
			//$.post("AddItem?item="+item_new);
			$.ajax ({
				url: "AddItem",
				type: "POST",
				data: "item="+item_new,
				success: function(){
					$.ajax({
						url: "Catalog",
						type: "GET",
						dataType: "json",
						success: function (data) {
							$("#table").DataTable().clear().draw();
							$("#table").DataTable().rows.add(data).draw();
							$("#table").DataTable().page('last').draw('page');
							$("#table").DataTable().row( ':last', { order: 'applied' } ).select();
						}
					});
				}
			});
		}

		//КНОПКА "СОХРАНИТЬ" ФОРМЫ ИЗМЕНЕНИЯ НАИМЕНОВАНИЯ
		EditItem_button.onclick = function(){
			var eq_save="";
			$('.selected .eq').each(function(){
				eq_save = $(this).text();
				eq_save = parseInt(eq_save) - 1;
			});
			var edit_id = $("#table").DataTable().cell(".selected", 1).data();
			var page = $("#table").DataTable().page();
			var edit_item = document.getElementById("edit_item").value;
			$.ajax ({
				url: "EditItem",
				type: "POST",
				data: "edit_id="+edit_id+"&item="+edit_item,
				success: function(){
					$.ajax({
						url: "Catalog",
						type: "GET",
						dataType: "json",
						success: function(data){
							$("#table").DataTable().clear().draw();
							$("#table").DataTable().rows.add(data).draw();
							$("#table").DataTable().page(page).draw('page');
							$("#table").DataTable().row(":eq("+eq_save+")").select();
						}
					});
				}
			});
		}

		//КНОПКА "СОХРАНИТЬ" ФОРМЫ ИЗМЕНЕНИЯ КОЛИЧЕСТВА
		EditQuantity_button.onclick = function(){
			$('.selected .eq').each(function(){
				eq_save = $(this).text();
				eq_save = parseInt(eq_save) - 1;
			});
			var q_id = document.getElementById("quantity_id").value;
			var q = document.getElementById("edit_quantity").value;
			var page = $("#table").DataTable().page();
			$.ajax ({
				url: "EditQuantity",
				type: "POST",
				data: "edit_id="+q_id+"&quantity="+q,
				success: function(){
					$.ajax({
						url: "Catalog",
						type: "GET",
						dataType: "json",
						success: function(data){
							$("#table").DataTable().clear().draw();
							$("#table").DataTable().rows.add(data).draw();
							$("#table").DataTable().page(page).draw('page');
							$("#table").DataTable().row(":eq("+eq_save+")").select();
						}
					});
				}
			});
		}


	</script>
				
</body>

</html>