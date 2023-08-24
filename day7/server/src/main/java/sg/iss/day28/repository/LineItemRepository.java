package sg.iss.day28.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import sg.iss.day28.model.LineItem;
import sg.iss.day28.Utils;

@Repository
public class LineItemRepository {

	@Autowired
	private JdbcTemplate template;

	public void insertLineItem(String orderId, LineItem lineItem) {

		template.update(Utils.SQL_INSERT_LINEITEM, orderId, lineItem.name()
				, lineItem.quantity(), lineItem.unitPrice());
	}

}
