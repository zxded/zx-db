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

@WebServlet(urlPatterns = "/DeleteDoc")

public class DeleteDoc extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private Statement stmt = null;
	private Connection connect = null;
	private Statement stmt2 = null;
	private Connection connect2 = null;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		try {
			int doc_num = Integer.parseInt(request.getParameter("doc_num"));
			String query = "DELETE FROM operations WHERE doc_num = " + doc_num;
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			int i = stmt.executeUpdate(query);
			System.out.println("Rows of document №" + doc_num + " is successfully deleted!");
			//response.sendRedirect(request.getContextPath()+"/operations.jsp");
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
		try {
			int doc_num2 = Integer.parseInt(request.getParameter("doc_num"));
			String query2 = "DELETE FROM docs WHERE num = " + doc_num2;
			DBagent db2 = new DBagent();
			Connection conn2 = db2.getConnection();
			Statement stmt2 = conn2.createStatement();
			int i2 = stmt2.executeUpdate(query2);
			System.out.println("Document №" + doc_num2 + " is successfully deleted!");
			response.sendRedirect(request.getContextPath()+"/operations.jsp");
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}

}