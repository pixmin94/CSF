package sg.iss.day28.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import sg.iss.day28.service.GifService;

@Controller
@RequestMapping(path="/api")
@CrossOrigin
public class GifController {

    @Autowired
    private GifService service;

    @GetMapping(path="/search", produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<String> getGifs(@RequestParam String q) {
        List<String> images = service.search(q);
        
        return ResponseEntity.ok(
            Json.createArrayBuilder(images).build().toString()
        );
    }

}
