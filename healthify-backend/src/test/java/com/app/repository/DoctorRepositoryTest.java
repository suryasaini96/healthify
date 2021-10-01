package com.app.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.entity.Doctor;
@SpringBootTest
class DoctorRepositoryTest {

	@Autowired
	private DoctorRepository doctorRepo;
	@Test
	void testAddDoctor() {
		List<Doctor> doctors= Arrays.asList(new Doctor("suyog@gmail.com","suyog123",1L,"suyog",11112222L,"Shivaji Peth","Kolhapur",9874563218L,"cardiologist"));
		doctorRepo.saveAll(doctors);
	}

}
