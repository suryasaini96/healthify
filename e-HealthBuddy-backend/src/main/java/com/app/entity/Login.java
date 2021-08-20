package com.app.entity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class Login {
	@Column(unique = true)
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
}
