package com.app;

import java.time.LocalDate;
import java.util.ArrayList;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import com.app.entity.Consultation;
import com.app.entity.Doctor;
import com.app.entity.Patient;
import com.app.repository.ConsultationRepository;
import com.app.repository.DoctorRepository;
import com.app.repository.PatientRepository;

@SpringBootApplication
@EnableCaching
public class EHealthBuddyApplication {
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	ConsultationRepository consultationRepository;
	
	@PostConstruct
	public void initDB() {
		Patient patient = new Patient(Long.valueOf(12), "Surya", Long.valueOf(7746), LocalDate.parse("1996-11-12"),"H-228","Delhi", Long.valueOf(7291885612L), new ArrayList<>());
		Doctor doctor = new Doctor(Long.valueOf(100), "Ramesh", Long.valueOf(8989), "Patel Nagar", "Delhi", Long.valueOf(92929292L), "dentist", new ArrayList<>());
		patient.setEmail("ss@gmail.com");
		patient.setPassword("helloWorld");
		doctor.setEmail("ramesh@gmail.com");
		doctor.setPassword("docpass");
		patientRepository.save(patient);
		doctorRepository.save(doctor);
		Consultation consultation1 = new Consultation( LocalDate.parse("2021-08-19"), "prognosis", "medicines", "diagnosis", patient, doctor);
		Consultation consultation2 = new Consultation( LocalDate.parse("2021-08-21"), "prog", "paracetamol", "fever", patient, doctor);
		consultationRepository.save(consultation1);
		consultationRepository.save(consultation2);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(EHealthBuddyApplication.class, args);
	}

}
