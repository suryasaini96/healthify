package com.app.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.DoctorConsultationsDTO;
import com.app.entity.Consultation;
import com.app.entity.Doctor;
import com.app.entity.Patient;
import com.app.pojos.DoctorConsultations;
import com.app.repository.ConsultationRepository;
import com.app.repository.DoctorRepository;

@Service
public class DoctorService {
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	ConsultationRepository consultationRepository;
	
	public List<Doctor> findByCityAndSpeciality(String city, String speciality) {
		return doctorRepository.findByCityAndSpecialityIgnoreCasePartialMatch(city.trim().toLowerCase(), speciality.trim().toLowerCase());
	}
	
	public Optional<Doctor> findById(Long doctor_id) {
		return doctorRepository.findById(doctor_id);
	}
	
	public DoctorConsultationsDTO findByIdGroupByPatient(Long doctor_id) {
	
		Optional<Doctor> d = doctorRepository.findById(doctor_id);
		Doctor doctor = d.isPresent() ? d.get() : null;
		
		List<Consultation> consultations = consultationRepository.findByDoctorId(doctor_id);
		HashMap<Patient, List<Consultation>> map = new HashMap<>();
		consultations.stream().forEach(c -> {
			Patient patient = c.getPatient();
			if (map.containsKey(patient)) {
				List<Consultation> listOfConsultations = map.get(patient);
				listOfConsultations.add(c);
				map.put(patient, listOfConsultations);
			} else {
				List<Consultation> listOfConsultations = new ArrayList<Consultation>();
				listOfConsultations.add(c);
				map.putIfAbsent(patient, listOfConsultations);
			}
		});
		
		List<DoctorConsultations> listOfDoctorConsultations = new ArrayList<>();		
		for (Map.Entry<Patient, List<Consultation>> entry: map.entrySet()) {
			DoctorConsultations doctorConsultations = new DoctorConsultations(entry.getKey(), entry.getValue());
			listOfDoctorConsultations.add(doctorConsultations);
		}
		return new DoctorConsultationsDTO(doctor, listOfDoctorConsultations);
	}
	
	public Optional<Doctor> findByEmailAndPassword(String email, String password) {
		return doctorRepository.findByEmailAndPassword(email, password);
	}
	
	public String registerDoctor(Doctor doctor) {
		if (doctorRepository.findById(doctor.getDid()).isPresent()) {
			return "Doctor already exists";
		} else {
			try {
				doctorRepository.save(doctor);
				return "Doctor registered successfully";
			} catch (Exception e) {
				return "Doctor registration failed";
			}
		}
	}
}
