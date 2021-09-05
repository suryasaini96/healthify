package com.app.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "patient")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Patient extends Login {
	@Id
	@Column(name = "patient_id", unique = true)
	private Long pid;
	private String name;
	@Column(unique = true)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long aadhar;
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	private String address;
	private String city;
	@Column(unique = true)
	private Long mobile;
	
	@JsonManagedReference(value="patient_id")
	@OneToMany(mappedBy = "cid")
	private List<Consultation> consultations = new ArrayList<>();
	
	public void addConsultation(Consultation consultation) {
		consultations.add(consultation);
	}
}
