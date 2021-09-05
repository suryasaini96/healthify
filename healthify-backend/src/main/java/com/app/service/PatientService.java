package com.app.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.PatientConsultationsDTO;
import com.app.entity.Consultation;
import com.app.entity.Doctor;
import com.app.entity.Patient;
import com.app.pojos.PatientConsultations;
import com.app.repository.ConsultationRepository;
import com.app.repository.PatientRepository;

@Service
public class PatientService {
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	ConsultationRepository consultationRepository;
	
	public Optional<Patient> findById(Long patient_id) {
		return patientRepository.findById(patient_id);
	}
	
	public PatientConsultationsDTO findByIdGroupByDoctor(Long patient_id) {
		Optional<Patient> p = patientRepository.findById(patient_id);
		Patient patient = p.isPresent() ? p.get() : null;
		
		List<Consultation> consultations = consultationRepository.findByPatientId(patient_id);
		HashMap<Doctor, List<Consultation>> map = new HashMap<>();
		consultations.stream().forEach(c -> {
			Doctor doctor = c.getDoctor();
			if (map.containsKey(doctor)) {
				List<Consultation> listOfConsultations = map.get(doctor);
				listOfConsultations.add(c);
				map.put(doctor, listOfConsultations);
			} else {
				List<Consultation> listOfConsultations = new ArrayList<Consultation>();
				listOfConsultations.add(c);
				map.putIfAbsent(doctor, listOfConsultations);
			}
		});
		
		List<PatientConsultations> patientConsultations = new ArrayList<>();		
		for (Map.Entry<Doctor, List<Consultation>> entry: map.entrySet()) {
			PatientConsultations listOfConsultations = new PatientConsultations(entry.getKey(), entry.getValue());
			patientConsultations.add(listOfConsultations);
		}
		return new PatientConsultationsDTO(patient, patientConsultations);
	}
	
	public Optional<Patient> findByEmailAndPassword(String email, String password) {
		return patientRepository.findByEmailAndPassword(email, password);
	}
	
	public String registerPatient(Patient patient) {
		if (patientRepository.findById(patient.getPid()).isPresent()) {
			return "Patient already exists";
		} else {
			try {
				patientRepository.save(patient);
				return "Patient registered successfully";
			} catch (Exception e) {
				return "Patient registration failed";
			}
			
		}
	}
}
