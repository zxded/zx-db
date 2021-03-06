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


@WebServlet(urlPatterns = "/EditDoc")

public class EditDoc extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private Statement stmt = null;
	private ResultSet rs = null;
	private Connection connect=null;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String query = "SELECT MAX(id) FROM operations;";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			String id_last = "";
			while (rs.next()) {
				System.out.println(String.valueOf(rs.getInt(1)));
				id_last = String.valueOf(rs.getInt(1));
			}
			System.out.println(id_last);
			response.setContentType ("text/plain");
			response.setCharacterEncoding ("UTF-8");
			response.getWriter().write(id_last);
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/notfound.jsp").forward(request, response); 
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		try {
			String id_new = request.getParameter("id_new");
			String doc_id_to_add = request.getParameter("doc_id_to_add");
			String item_id_to_add = request.getParameter("item_id_to_add");
			String quantity_to_add = request.getParameter("quantity_to_add");
			String query = "INSERT INTO operations VALUES ('"+id_new+"', '"+doc_id_to_add+"', '"+item_id_to_add+"', '"+quantity_to_add+"');";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			int i = stmt.executeUpdate(query);
			System.out.println("Operation is successfully inserted!");
			response.sendRedirect(request.getContextPath()+"/operations.jsp");
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}
}