package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.entity.Doctor;
import com.app.service.DoctorService;


@CrossOrigin
@RestController
@RequestMapping("/doctor")
public class DoctorController {
	
	@Autowired
	DoctorService doctorService;
	
	@GetMapping("/city/{city}")
	public ResponseEntity<List<Doctor>> findByCity(@PathVariable String city, @RequestParam String speciality) {
		return new ResponseEntity<List<Doctor>>(doctorService.findByCityAndSpeciality(city, speciality), HttpStatus.OK);
	}
	
	@GetMapping("/id/{doctor_id}")
	public ResponseEntity<Optional<Doctor>> findByDid(@PathVariable Long doctor_id){
		return new ResponseEntity<Optional<Doctor>>(doctorService.findById(doctor_id), HttpStatus.OK);
	}

}
