package sg.iss.day28.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.iss.day28.model.Game;
import sg.iss.day28.repository.GameRepository;

@Service
public class SearchBGGService {

    @Autowired
    private GameRepository gameRepo;

    public List<Game> searchGame(Integer limit, Integer offset) {
        return (List<Game>) gameRepo.search(limit, offset);
    }

}