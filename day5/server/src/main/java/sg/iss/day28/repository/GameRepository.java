package sg.iss.day28.repository;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import sg.iss.day28.model.Game;

@Repository
public class GameRepository {

        @Autowired
        private MongoTemplate mongoTemplate;

        public List<Game> search(Integer limit,
                        Integer offset) {

                // final Pageable pageableRequest = PageRequest.of(offset, limit);
                // Query query = new Query();
                // query.with(pageableRequest);
                Query query = new Query();
                query.with(Sort.by(Sort.Direction.ASC, "gid")).limit(limit).skip(offset);
                

                // lambda to find all the mongo game collections
                return mongoTemplate.find(query, Document.class, "game")
                                .stream()
                                .map(d -> Game.create(d))
                                .toList();
        }

}