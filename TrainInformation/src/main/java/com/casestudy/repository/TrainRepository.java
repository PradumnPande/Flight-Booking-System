package com.casestudy.repository;

import java.util.List;

import com.casestudy.model.TrainDetails;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrainRepository extends MongoRepository<TrainDetails, String>{

	List<TrainDetails> findAllBySourceAndDestinationAndDate(String source, String destination, String date);

	List<TrainDetails> findAllByName(String name);
	
	
}
