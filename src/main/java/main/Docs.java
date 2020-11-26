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


@WebServlet(urlPatterns = "/Docs")

public class Docs extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private Statement stmt = null;
    private ResultSet rs = null;
    private Connection connect = null;
    

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	
    	try {
    		int num = 1;
			if (request.getParameter("num") != null) {
				num = Integer.parseInt(request.getParameter("num"));
				System.out.println("num = " + num);
			}
    		//String query = "SELECT * FROM docs;";
    		String query = "SELECT docs.num, docs.date, doc_types.doc_type FROM docs JOIN doc_types " +
    					"ON docs.doc_type_id = doc_types.id;";
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
				obj.put("num", String.valueOf(rs.getInt(1)));
				obj.put("date", String.valueOf(rs.getDate(2)));
				obj.put("doc_type", rs.getString(3));
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
