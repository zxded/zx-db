<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Statement"%>
<%@page import="main.DBagent"%>
<%@page import="java.io.PrintWriter"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>***Учет запчастей***</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/main.css">
</head>

<body>
	<header id="header" class="header">
		<div class="header-main">
			<div class="container">
				<div class="row">
					<div class="col-lg-2">
					</div>
					<div class="col-lg-5">
						<h1>Учет запчастей</h1>
					</div>
				</div>
			</div>
		</div>
		<div class="menu">
			<div class="container">
				<div class="row">
					<div class="col-lg-3">
						<button class="cta d-flex justify-content-center">
							<a href="catalog.html" class="cta">
								каталог
							</a>
						</button>
					</div>
					<div class="col-lg-3">
						<button class="cta d-flex justify-content-center">
							<a href="prihod.html" class="cta">
								приход
							</a>
						</button>
					</div>
					<div class="col-lg-2">
						<button class="cta d-flex justify-content-center">
							<a href="rashod.html" class="cta">
								расход
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="catalog">
			<div class="container">
				<div class="row">
					<h3>Каталог</h3>
					<p></p>
				</div>
			</div>
		</div>

<%
	String query = "select product_id, product from products";

	DBagent db = new DBagent();
	Connection conn = db.getConnection();
	Statement stmt = conn.createStatement();
	ResultSet rs = stmt.executeQuery(query);
    		
	while (rs.next()) {
 	   int id = rs.getInt(1);
 	   String name = rs.getString(2);
 	   out.print(id+": "+name+"<br>");
 	 }
	
%>

</body>

</html>