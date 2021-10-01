package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.entity.Doctor;
import com.app.repository.DoctorRepository;
@SpringBootTest
class DoctorServiceTest {
@Autowired
private DoctorService doctorService;

@Autowired
private DoctorRepository doctorRepo;

	@Test
	void testFindByID() {
		List<Doctor> doctors= Arrays.asList(new Doctor("suyog@gmail.com","suyog123",1L,"suyog",11112222L,"Shivaji Peth","Kolhapur",9874563218L,"cardiologist"));
		doctorRepo.saveAll(doctors);
		Optional<Doctor> d = doctorService.findById(1L);
		Doctor doctor = d.isPresent() ? d.get():null;
		Assertions.assertThat(doctor.getDid()).isEqualTo(1L);
	}

	@Test
	void testFindByCityAndSpeciality() {
		List<Doctor> doctors = doctorService.findByCityAndSpeciality("Delhi","Cardiologist");
		assertEquals(1, doctors.size());
	}
	
}
