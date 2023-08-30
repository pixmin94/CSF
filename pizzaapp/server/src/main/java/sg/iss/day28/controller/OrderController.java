package sg.iss.day28.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;

import sg.iss.day28.repository.OrderRepository;
import sg.iss.day28.model.Order;

@RestController
@RequestMapping(path="/api")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderRepository service;

    @GetMapping(path="/order/{email}/all")
    public ResponseEntity<List<Order>> getOrders(@PathVariable String email) {
        List<Order> orders = service.getOrders();
        System.out.println(email);
        // System.out.println(orders);
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(orders);
    }

    @PostMapping(path="/order")
    public ResponseEntity<String> postOrder(@RequestBody String order) { //(@ModelAttribute Order order) {
        System.out.println(order);
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(order);
    }

}
