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


@WebServlet(urlPatterns = "/EditQuantity")

public class EditQuantity extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private Statement stmt = null;
    private ResultSet rs = null;
    private Connection connect= null;
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
     
            getServletContext().getRequestDispatcher("/catalog.jsp").forward(request, response);
        }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		try {
			int id = Integer.parseInt(request.getParameter("edit_id"));
		    int quantity = Integer.parseInt(request.getParameter("quantity"));
		    String query = "UPDATE items " +"SET quantity = "+quantity+" WHERE id = '"+id+"'";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			int i = stmt.executeUpdate(query);
			System.out.println("Quantity is successfully edited!");
						
			response.sendRedirect(request.getContextPath()+"/catalog.jsp");
			
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}

}


