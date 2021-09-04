package com.app.dto;

import java.util.List;

import com.app.entity.Doctor;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ConsultationsFormDTO {
	private Long patient_id;
	private Long doctor_id;
	private String diagnosis;
	private String medicines;
	private String prognosis;
}
