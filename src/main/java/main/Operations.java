package main;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.*;


@WebServlet(urlPatterns = "/Operations")

public class Operations extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private Statement stmt = null;
    private ResultSet rs = null;
    private Connection connect=null;
    

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	
    	try {
    		int doc_num = 1;
    		if (request.getParameter("doc_id") != null) {
    			doc_num = Integer.parseInt(request.getParameter("doc_id"));
    			System.out.println("doc_id = " + doc_num);
    		}
    		String query = "SELECT operations.id, items.item, operations.quantity AS quantity " + 
    						"FROM operations JOIN items ON items.id=operations.item_id WHERE doc_num = '"+doc_num+"';";
			DBagent db = new DBagent();
			Connection conn = db.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			request.setCharacterEncoding("UTF-8");
	        response.setContentType("application/json; charset=UTF-8;");
	    	PrintWriter out = response.getWriter();
			JSONArray data = new JSONArray();
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("id", String.valueOf(rs.getInt(1)));
				obj.put("item", rs.getString(2));
				obj.put("quantity", String.valueOf(rs.getInt(3)));
				data.add(obj);
		 	}
			String s = data.toString();
	        request.getSession().setAttribute("data", s);
	        response.setCharacterEncoding("UTF-8");
	        out.print(s);
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
    	
	}
    
    
}


