package main;

import java.util.List;
import java.util.ArrayList;
import java.sql.*;
import main.DBagent;
import main.Add;

public class Products {
	
    private List<Product> data = new ArrayList<Product>();
    public  Products() throws SQLException {
    	String query = "select id, product from products";

    	DBagent db = new DBagent();
		Connection conn = db.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(query);
		
		while (rs.next()) {
			data.add(new Product(rs.getInt(1), rs.getString(2)));
		}
		//data.add(new Product(1,"Pro1"));
		//data.add(new Product(2,"Pro2"));
    }

    public List<Product> getData() {
		return data;
	}
		
	public void setData(List<Product> data) {
		this.data = data;
	}
		
}
