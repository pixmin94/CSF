package sg.iss.day28.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import sg.iss.day28.model.Order;
import sg.iss.day28.Utils;

@Repository
public class OrdersRepository {

	@Autowired
	private JdbcTemplate template;

	public void createOrder(String orderId, Order order) {

		// Throws unchecked exception - DataAccessException
		template.update(Utils.SQL_INSERT_ORDER
				, orderId, order.name(), order.email(), order.express());

	}
}
