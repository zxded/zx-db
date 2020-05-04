<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Statement"%>
<%@page import="main.DBagent"%>
<%@page import="main.Add"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="java.util.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>



<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>***Учет запчастей***</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/main.css">
	
		<script type="text/javascript" src="js/jquery.js"></script>
	
</head>

<body>
	<header id="header" class="header">
		<div class="header-main">
			<div class="container">
				<div class="row">
					<div class="col-lg-2">
					</div>
					<div class="col-lg-5">
						<h1>Каталог</h1>
					</div>
				</div>
			</div>
		</div>
		<div class="menu">
			<div class="container">
				<div class="row">
					<div class="col-lg-3">
						<button class="cta d-flex justify-content-center">
							<a href="index.html" class="cta">
								на главную
							</a>
						</button>
					</div>
					<div class="col-lg-3">
						<button class="add_button cta d-flex justify-content-center">
							<a href="add.html" class="cta">
								добавить
							</a>
						</button>
					</div>
					<div class="col-lg-3">
						<button class="edit_button cta d-flex justify-content-center">
							<a href="#" class="cta">
								редактировать
							</a>
						</button>
					</div>
					<div class="col-lg-3">
						<button class="cta d-flex justify-content-center">
							<a href="#" class="cta">
								удалить
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="catalog">
			<div class="container">
				<div class="row">
					<div class="col-lg-3">
						<%
							//Соединяемся с БД и выполняем запрос
							String query = "select id, product from products";
							DBagent db = new DBagent();
							Connection conn = db.getConnection();
							Statement stmt = conn.createStatement();
							ResultSet rs = stmt.executeQuery(query);
							//Создаем таблицу (резиновый массив)
							ArrayList table = new ArrayList();
							//Записываем значения в строки
							while (rs.next()) {
								//Создаем временную таблицу 2х2 (имя колонки, значение)												 
						 	   	Map tMap = new HashMap();
						 	   	tMap.put("id", rs.getInt(1));
						 	   	tMap.put("name", rs.getString(2));
						 	   	//Заносим данные в массив
						 	   	table.add(tMap);
						 	}
							//подробнее зачем именно так
							request.setAttribute("products", table);
						%>
            			
 				<table>
			      	<th>Id</th>
			      	<th>Name</th>
			      	<c:forEach items="${products}" var="current">
			        	<tr>
				          	<td><c:out value="${current.id}" /><td>
				          	<td><c:out value="${current.name}" /><td>
				          	
				        </tr>
			      	</c:forEach>
			    </table>
			    <br>
			    
			    <!-- <select size="6" id="loc" onchange="document.location=this.options[this.selectedIndex].value"> переход на стр. -->
			    <select size="6" id="select" onchange="id=this.options[this.selectedIndex].value">
			    	<c:forEach items="${products}" var="current">
			    		<option value="${current.id}">${current.name}</option>
			    	</c:forEach>
			    </select>
			    <br>
			    <form method="post" action="Delete">
			        <input name="del_id" value="235">
			        <input action="Delete" type="submit" value="Delete">
			        
			        <input type="button" onclick="getValue()" value="Выбрать"/>
    			</form>
    			
    			<script type="text/javascript">
    			let mySelectOption = getValue; // - полученное из функции значение прсвоим в переменную и используем где нужно))

    			function getValue(){
    			let selectedValue = select.value;
    			console.log(selectedValue);
    			return selectedValue;
    			}
    			</script>
				
</body>

</html>