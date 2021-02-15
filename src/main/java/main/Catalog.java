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

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@WebServlet(urlPatterns = "/Catalog")

public class Catalog extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private Statement stmt = null;
    private ResultSet rs = null;
    private Connection connect= null;
    
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Catalog() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		    String query = "SELECT * FROM items";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			System.out.println("Items is loaded");
			request.setCharacterEncoding("UTF-8");
	        response.setContentType("application/json; charset=UTF-8;");
	    	PrintWriter out = response.getWriter();
			JSONArray data = new JSONArray();
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("id", String.valueOf(rs.getInt(1)));
				obj.put("item", rs.getString(2));
				obj.put("quantity", String.valueOf(rs.getInt(3)));
				obj.put("price", String.valueOf(rs.getInt(4)));
		 	   	data.add(obj);
		 	}
			String s = data.toString();
	        request.getSession().setAttribute("data", s);
	        response.setCharacterEncoding("UTF-8");
	        out.print(s);
			
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/notfound.jsp").forward(request, response); 
		}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		try {
		    String query = "SELECT * FROM items";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			System.out.println("Items is loaded");
			request.setCharacterEncoding("UTF-8");
	        response.setContentType("application/json; charset=UTF-8;");
	    	PrintWriter out = response.getWriter();
			JSONArray data = new JSONArray();
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("id", String.valueOf(rs.getInt(1)));
				obj.put("item", rs.getString(2));
				obj.put("quantity", String.valueOf(rs.getInt(3)));
				obj.put("price", String.valueOf(rs.getInt(4)));
		 	   	data.add(obj);
		 	}
			String s = data.toString();
	        request.getSession().setAttribute("data", s);
	        response.setCharacterEncoding("UTF-8");
	        out.print(s);			
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/notfound.jsp").forward(request, response); 
		}
	}
}
