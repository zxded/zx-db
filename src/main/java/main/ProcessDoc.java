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

@WebServlet(urlPatterns = "/ProcessDoc")

public class ProcessDoc extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private Statement stmt = null;
	private ResultSet rs = null;
	private Connection connect=null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			int doc_id = Integer.parseInt(request.getParameter("doc_id"));
			int doc_type_id = Integer.parseInt(request.getParameter("doc_type_id"));
			System.out.println("doc_id = " + doc_id);
			System.out.println("doc_type_id = " + doc_type_id);
			int arr_size = 0;
			int count = 0;
			String query =	"SELECT COUNT(*) FROM operations JOIN items ON operations.item_id=items.id WHERE doc_id=" + doc_id;
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			while (rs.next()) {
				arr_size = rs.getInt(1);
			}
			System.out.println("Array size = " + arr_size);
			int[][] arr = new int[arr_size][4] ;
			query = "SELECT item_id, operations.quantity AS q_doc, items.quantity AS q_old, operations.price AS price_doc " +
					"FROM operations JOIN items ON operations.item_id=items.id WHERE doc_id=" + doc_id;
			rs = stmt.executeQuery(query);
			while (rs.next()) {
				arr[count][0] = rs.getInt(1);
				arr[count][1] = rs.getInt(2);
				arr[count][2] = rs.getInt(3);
				arr[count][3] = rs.getInt(4);
				count++;
			}
			int q_new;
			for (count=0;count<arr_size;count++) {
				q_new = (doc_type_id == 1) ? (arr[count][2] + arr[count][1]) : (arr[count][2] - arr[count][1]);
				query = "UPDATE items SET quantity=" + q_new + ", price=" + arr[count][3] + " WHERE id=" + arr[count][0];
				stmt.executeUpdate(query);
				System.out.print("Item_id = " + q_new + "  ");
				System.out.print("Q_new = " + q_new + "  ");
				System.out.println("Price_new = " + arr[count][3]);
			}
			query = "UPDATE docs SET processed=1 WHERE id="+doc_id;
			stmt.executeUpdate(query);
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}

}