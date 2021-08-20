package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Country;
import com.app.service.CovidTrackerService;

@CrossOrigin
@RestController
@RequestMapping("/covid-api")
public class CovidTrackerController {
	
	private final CovidTrackerService covidTrackerService;
	
	@Autowired
	public CovidTrackerController(CovidTrackerService serviceLayer) {
		this.covidTrackerService = serviceLayer;
	}
	
	@GetMapping("/{code}")
	public ResponseEntity<Country> getCountryData(@PathVariable String code) {
		return new ResponseEntity<Country>(covidTrackerService.getCountryData(code), HttpStatus.OK);
	}
	
	
}
