package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Patient;
import com.app.service.PatientService;

@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	PatientService patientService;
	
	@GetMapping("/id/{patient_id}")
	public ResponseEntity<Optional<Patient>> findByPid(@PathVariable Long patient_id) {
		return new ResponseEntity<Optional<Patient>>(patientService.findById(patient_id), HttpStatus.OK);
	}
	
}
