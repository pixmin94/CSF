package sg.iss.day28.model;

import java.util.List;

public record Order(String name, String email, Boolean express, List<LineItem> lineItems) {
}
