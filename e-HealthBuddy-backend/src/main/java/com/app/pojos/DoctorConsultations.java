package com.app.pojos;

import java.util.List;

import com.app.entity.Consultation;
import com.app.entity.Patient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorConsultations {
	Patient patient;
	List<Consultation> consultations;
}
