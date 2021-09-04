package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{
	List<Doctor> findByCityAndSpecialityIgnoreCase(String city, String speciality);
	Optional<Doctor> findByEmailAndPassword(String email, String password);
	
}
