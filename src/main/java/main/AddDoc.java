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


@WebServlet(urlPatterns = "/AddDoc")

public class AddDoc extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private Statement stmt = null;
	private ResultSet rs = null;
	private Connection connect=null;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String query = "SELECT MAX(id) FROM docs;";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			String doc_id_last = "";
			while (rs.next()) {
				System.out.println(String.valueOf(rs.getInt(1)));
				doc_id_last = String.valueOf(rs.getInt(1));
			}
			System.out.println(doc_id_last);
			response.setContentType ("text/plain");
			response.setCharacterEncoding ("UTF-8");
			response.getWriter().write(doc_id_last);
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		try {
			String doc_id_new = request.getParameter("doc_id_new");
			String doc_date_new = request.getParameter("doc_date_new");
			String doc_type_id = request.getParameter("doc_type_id");
			//String contragent_id = request.getParameter("contragent_id");
			//String processed = request.getParameter("processed");
			//String info = request.getParameter("info");
			String query = "INSERT INTO docs VALUES ('"+doc_id_new+"', '"+doc_date_new+"', '"+doc_type_id+"', 1, 0, '-')";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			int i = stmt.executeUpdate(query);
			System.out.println("Doc is successfully inserted!");
			response.sendRedirect(request.getContextPath()+"/operations.jsp");
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}
}