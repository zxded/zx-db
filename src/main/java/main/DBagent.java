package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;


public class DBagent {
    //private static final String url = "jdbc:postgresql://ec2-54-247-103-43.eu-west-1.compute.amazonaws.com:5432/dojaadtgpnfhp?sslmode=require"; //если надо меняем на jdbc:mysql://localhost:8080/zxdb
    //private static final String user = "swgupveklxaqla";	//или "root"
    //private static final String password = "35f3f9b051c30be971f173cdd027450997dac4987f420795972499f6eb63b31a";	//или "root"

	private static final String url = "jdbc:postgresql://localhost:5432/zx-db"; //если надо меняем на jdbc:mysql://localhost:8080/zxdb
    private static final String user = "postgres";	//или "root"
    private static final String password = "root";	//или "root"
    
	public Connection getConnection() {
	    //stmt = con.createStatement();
		String query = "select id, product from products";
		
		try {
			Class.forName("org.postgresql.Driver");	//или "org.mysql.Driver"
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
