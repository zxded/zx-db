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


@WebServlet(urlPatterns = "/Add")

public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private Statement stmt = null;
    private ResultSet rs = null;
    private Connection connect=null;
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
     
            getServletContext().getRequestDispatcher("/add.html").forward(request, response);
        }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		try {
			int id = Integer.parseInt(request.getParameter("id"));
		    String product = request.getParameter("product");
		    	        
		    //String query = "INSERT INTO products " +"VALUES ('\"N \"','"+id+"','"+product+"')";
		    String query = "INSERT INTO products " +"VALUES ('"+id+"','"+product+"')";
		    //String query = "INSERT INTO products " +"VALUES ('7','777')";
		    
			
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			int i = stmt.executeUpdate(query);
			System.out.println("Data is successfully inserted!");
						
			response.sendRedirect(request.getContextPath()+"/catalog.jsp");
			
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/notfound.jsp").forward(request, response); 
		}
	}

}


