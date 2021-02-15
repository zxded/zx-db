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
    		int id = 1;
			if (request.getParameter("id") != null) {
				id = Integer.parseInt(request.getParameter("id"));
				System.out.println("id = " + id);
			}
    		//String query = "SELECT * FROM docs;";
    		//String query = "SELECT docs.id, docs.date, doc_types.doc_type, docs.contragent_id FROM docs JOIN doc_types " +
    					//"ON docs.doc_type_id = doc_types.id;";
    		String query = "SELECT docs.id, docs.date, doc_types.doc_type, contragents.contragent, docs.processed, docs.info FROM docs JOIN doc_types ON docs.doc_type_id = doc_types.id JOIN contragents ON docs.contragent_id = contragents.id;";
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
				obj.put("date", String.valueOf(rs.getDate(2)));
				obj.put("doc_type", rs.getString(3));
				obj.put("contragent", rs.getString(4));
				//String processed;
				//processed = (rs.getInt(5) == 1) ? "Да" : "Нет";
				//obj.put("processed", processed);
				obj.put("processed", rs.getInt(5));
				obj.put("info", rs.getString(6));
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
