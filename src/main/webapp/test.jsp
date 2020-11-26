<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Statement"%>
<%@page import="main.DBagent"%>
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
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/datatables.min.css"/>
	<script type="text/javascript" language="javascript" src="js/jquery-3.3.1.js"></script>
 	<script type="text/javascript" src="js/datatables.min.js">
 	</script>
 	<script type="text/javascript" class="init">
		$(document).ready(function() {
			$('#example').DataTable();
		} );
	</script>
	
</head>

<body>
	<!-- МЕНЮ -->
	<div id="start"></div>
	<div class="start_space"></div>
	<header class="header">
		<div class="menu_burger">
			<span></span>
		</div>
		<div class="menu">
			<ul>
				<li><a href="catalog.jsp">каталог</a></li>
				<li><a href="operations.jsp">операции</a></li>
				<li><a href="test.jsp">тест</a></li>
			</ul>
		</div>
	</header>

	<div class="wrapper">
		<div class="container b3">
			<div class="button_section b2">
				<div class="button w1"><a href="#add_window">Кнопка №1</a></div>
				<div class="button w1"><a href="#edit_window">Кнопка №2</a></div>
			</div>
			
			<div class="catalog_section b2">
				<div class="catalog b1">
					
					<%
						String query = "select * from items";
						DBagent db = new DBagent();
						Connection conn = db.getConnection();
						Statement stmt = conn.createStatement();
						ResultSet rs = stmt.executeQuery(query);
						ArrayList table = new ArrayList();
						while (rs.next()) {
					 	   	Map tMap = new HashMap();
					 	   	tMap.put("id", rs.getInt(1));
					 	   	tMap.put("name", rs.getString(2));
					 	   	tMap.put("amount", rs.getInt(3));
					 	   	table.add(tMap);
					 	}
						request.setAttribute("items", table);
					%>
				    
				    <table id="example" class="select b2">
				    	<thead>
				    		<tr>
				    			<th>Id</th>
				    			<th>Наименование</th>
				    			<th>Остаток</th>
				    		</tr>
				    	</thead>
				    	<tbody>
							<c:forEach items="${items}" var="current">
								<tr>
									<td>${current.id}</td>
									<td>${current.name}</td>
									<td>${current.amount}</td>
								</tr>
							</c:forEach>
				    	</tbody>
				    </table>

				</div>
			</div>
		</div>
	</div>
	
</body>

</html>