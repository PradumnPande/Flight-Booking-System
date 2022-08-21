package com.casestudy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.model.TrainDetails;
import com.casestudy.service.TrainService;

@RestController
@CrossOrigin
public class TrainController {

	@Autowired
	private TrainService trainService;
	
	@GetMapping("/trainDetails")
	public List<TrainDetails> getAllTrains(){
		return trainService.getAllTrains();
	}
	
	@GetMapping("/trainSearchByName/{search}")
	public List<TrainDetails> getTrainByName(@PathVariable String search){
		return trainService.getTrainByName(search);
	}
	
	@GetMapping("/trainSearchById/{search}")
	public TrainDetails getTrainById(@PathVariable String search) {
		return trainService.getTrainById(search);
	}
	
	@PostMapping("/addTrains")
	public String addTrains(@RequestBody TrainDetails trainDetails) {
		trainService.addTrains(trainDetails);
		return "Train Added Successfully ! ";
	}
	
	@GetMapping("/checkTrains/{source}/{destination}/{date}")
	public List<TrainDetails> checkTrains(@PathVariable("source") String source, @PathVariable("destination") String destination, @PathVariable("date") String date){
		return trainService.checkTrains(source, destination, date);
		
	}
	
	@PutMapping("/updateTrain")
	public void updateTrain(@RequestBody TrainDetails trainDetails) {
		trainService.updateTrain(trainDetails);
	}
	
	@DeleteMapping("/removeTrain/{trainId}")
	public String removeTrain(@PathVariable String trainId) {
		return trainService.removeTrain(trainId);
	}

}
