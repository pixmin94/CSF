package sg.iss.day28.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Repository;

import sg.iss.day28.model.Order;

@Repository
public class OrderRepository {
    Order[] orders = {
            new Order("Hello", "hello@email.com", 6, "More cheese"),
            new Order("Fred", "fred@email.com", 12, null),
            new Order("Adele", "itsme@email.com", 18, "Less cheese")
        };
    
    // private List<Order> orders = new ArrayList<>();
    
    // public generateOrders() {
    //     orders.add(new Order("Hello", "hello@email.com", "Thin Crust", "More cheese"));
    //     orders.add(new Order("Fred", "fred@email.com", "Thick Crust", null));
    //     orders.add(new Order("Adele", "itsme@email.com", "Thin Crust", "Less cheese"));
    // }
    
    public List<Order> getOrders() {
        // List<Order> orders = new generateOrders();
        List<Order> orderlist = new ArrayList<>(Arrays.asList(orders));
        return orderlist;
    }
}
