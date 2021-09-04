package com.app.pojos;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Timeline {
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate date;
    private Long deaths;
    private Long confirmed;
    private Long recovered;
    private Long new_confirmed;
    private Long new_recovered;
    private Long new_deaths;
}
