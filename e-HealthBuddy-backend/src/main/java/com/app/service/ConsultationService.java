package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Consultation;
import com.app.repository.ConsultationRepository;

@Service
public class ConsultationService {
	
	@Autowired
	ConsultationRepository consultationRepository;
	
	public List<Consultation> findByPatientId(Long patient_id) {
		return consultationRepository.findByPatientId(patient_id);
	}

}
