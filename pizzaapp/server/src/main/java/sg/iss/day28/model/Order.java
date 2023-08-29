package sg.iss.day28.model;

public record Order (
    String name, String email, Integer size, String comments) {
}
