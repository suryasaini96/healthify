package com.app.dto;

import java.util.List;

import com.app.entity.Patient;
import com.app.pojos.PatientConsultations;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PatientConsultationsDTO {
	Patient patient;
	List<PatientConsultations> patient_consultations;
}
