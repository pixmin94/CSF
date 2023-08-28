package sg.iss.day28.controller;

import java.util.List;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import sg.iss.day28.model.Game;
import sg.iss.day28.model.Games;
import sg.iss.day28.service.SearchBGGService;

@RestController
@RequestMapping(path = "/api/bgg")
public class SearchGameRestController {

    @Autowired
    private SearchBGGService bggSvc;

    @GetMapping(path = "/games-ng")
    public ResponseEntity<String> getAllGameForAngular(
            @RequestParam Integer limit, @RequestParam Integer offset) {
        List<Game> results = bggSvc.searchGame(limit, offset);
        System.out.println("size > " + results.size());
        JsonArray result = null;
        JsonArrayBuilder objBuilder = Json.createArrayBuilder();
        for (Game g : results)
            objBuilder.add(g.toJSON());
        result = objBuilder.build();
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(result.toString());
    }

}
