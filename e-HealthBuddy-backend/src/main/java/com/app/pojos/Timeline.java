package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Timeline {
	private String date;
    private Long deaths;
    private Long confirmed;
    private Long recovered;
    private Long new_confirmed;
    private Long new_recovered;
    private Long new_deaths;
    
    
}
