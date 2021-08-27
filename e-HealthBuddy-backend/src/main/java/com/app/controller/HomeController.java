package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Doctor;
import com.app.entity.Login;
import com.app.entity.Patient;
import com.app.service.DoctorService;
import com.app.service.PatientService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin
@RestController
@Slf4j
public class HomeController {
	
	@Autowired
	PatientService patientService;
	
	@Autowired
	DoctorService doctorService;

	@PostMapping("/login")
	public ResponseEntity<?> Login(@RequestBody Login details) {
		String email = details.getEmail();
		String password = details.getPassword();
		log.info(email + " " + password); 
		Optional<Patient> patient = patientService.findByEmailAndPassword(email, password);
		Optional<Doctor> doctor = doctorService.findByEmailAndPassword(email, password);
		if (patient.isPresent()) {
			return new ResponseEntity<Patient>(patient.get(),HttpStatus.OK);
		}
		if (doctor.isPresent()) {
			return new ResponseEntity<Doctor>(doctor.get(),HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
	}
	
}
