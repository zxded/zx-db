package main;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(urlPatterns = "/Prihod")

public class Prihod extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private Statement stmt = null;
    private ResultSet rs = null;
    private Connection connect=null;
    

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
    	
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write("GET OK. doc_get = " + request.getParameter("doc_get"));
		
	}
    
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write("POST OK! doc_post = " + request.getParameter("doc_post"));
		
		/*
		try {
		    String doc = request.getParameter("doc_id");
		    System.out.println("Doc = " + doc);
		    //String query = "INSERT INTO products (product) " +"VALUES ('test');";
		    String query = "SELECT * FROM docs WHERE doc_id = '"+doc+"';";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			System.out.println("SQL query is Successfully executed!!!");
			
			//response.setContentType("text/plain");
			//response.setCharacterEncoding("UTF-8");
			//response.getWriter().write("SQL query is Successfully executed!!!");      // Write response body.
			//response.sendRedirect(request.getContextPath()+"/operations.jsp");
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
		*/
	}
    
}


