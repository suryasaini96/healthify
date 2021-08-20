package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "doctor")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Doctor extends Login {
	@Id
	@Column(name = "doctor_id",unique = true)
	private Long did;
	private String name;
	@Column(unique = true)
	private Long aadhar;
	private String address;
	private String city;
	@Column(unique = true)
	private Long mobile;
	private String speciality;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "cid")
	private List<Consultation> consultations = new ArrayList<>();
	
	public void addConsultation(Consultation consultation) {
		consultations.add(consultation);
	}
}	