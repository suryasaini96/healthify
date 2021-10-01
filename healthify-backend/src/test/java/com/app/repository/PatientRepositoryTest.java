package com.app.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.entity.Patient;

@SpringBootTest
class PatientRepositoryTest {
	@Autowired
	private PatientRepository patientRepo;

	@Test
	void tsetAddPatient() {
	List<Patient> patients = Arrays.asList(new Patient("riya@gmail.com","riya123",1L,"riya",11112222L,LocalDate.of(2000, 01, 01),"Rankala","Kolhapur",9086765323L));
	patientRepo.saveAll(patients);
	}

}
