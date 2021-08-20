package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{
	Optional<Patient> findByEmailAndPassword(String email, String password);
}
