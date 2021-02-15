package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;


public class DBagent {
	private static final String url="jdbc:mysql://localhost:3306/zxdb1?useUnicode=true&serverTimezone=UTC&useSSL=false";
	private static final String user = "zxded";
	private static final String password = "7gVS81eq";
	//private static final String user = "root";
	//private static final String password = "root";
    
	public Connection getConnection() {
		String query = "select * from items";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection(url, user, password);
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			
			return conn;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return null;
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}

	}
}
