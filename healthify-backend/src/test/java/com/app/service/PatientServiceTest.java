package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.entity.Patient;
import com.app.repository.PatientRepository;
@SpringBootTest
class PatientServiceTest {
@Autowired
private PatientService patientService;

@Autowired
private PatientRepository patientRepo;
	@Test
	public void testFindByID() {
		List<Patient> patients = Arrays.asList(new Patient("riya@gmail.com","riya123",1L,"riya",11112222L,LocalDate.of(2000, 01, 01),"Rankala","Kolhapur",9086765323L));
		patientRepo.saveAll(patients);
		
	   Optional<Patient> p = patientService.findById(1L);
	   Patient patient = p.isPresent() ? p.get() : null;
		Assertions.assertThat(patient.getPid()).isEqualTo(1L);
	}

}
