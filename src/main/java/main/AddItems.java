package main;

import java.util.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.BufferedReader;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;


@WebServlet("/AddItems")
public class AddItems extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AddItems() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String line;
		String dat;
		//ИЗВЛЕКАЕМ JSON ИЗ ЗАПРОСА
		StringBuilder builder = new StringBuilder();
		BufferedReader reader = request.getReader();
		while ((line = reader.readLine()) != null) {builder.append(line);}
		dat = builder.toString();
		//ВЫДЕЛЯЕМ СТРОКИ ИЗ JSON
		JSONObject obj = (JSONObject) JSONValue.parse(dat);
		JSONArray itemArray = (JSONArray) obj.get("data");
		JSONObject objRow = new JSONObject();
		try {
			for (int i=0;i<itemArray.size();i++) {
				objRow = (JSONObject) itemArray.get(i);
				System.out.println(objRow);
				String doc_num = (String) objRow.get("doc_num");
				String item_id = (String) objRow.get("item_id");
				String quantity = (String) objRow.get("quantity");
				System.out.println("doc_num = "+doc_num+", item_id = "+item_id+", quantity = "+quantity);
				String query = 	"INSERT INTO operations (doc_num, item_id, quantity) " +
								"VALUES ('"+doc_num+"',"+"'"+item_id+"',"+"'"+quantity+"')";
				DBagent db = new DBagent();
				Connection conn = db.getConnection();
				Statement stmt = conn.createStatement();
				int q = stmt.executeUpdate(query);
				String item = (String) objRow.get("item");
				System.out.println("Operation with item '"+item+"' is successfully inserted!");
			}
		} catch (SQLException e) {
			getServletContext().getRequestDispatcher("/sqle.jsp").forward(request, response); 
		}
	}
}
