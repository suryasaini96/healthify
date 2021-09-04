package com.app.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.dto.CovidDTO;
import com.app.pojos.Country;
import com.app.pojos.LatestData;
import com.app.pojos.Timeline;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

@Service
public class CovidTrackerService {
	
	private final RestTemplate restTemplate;
	private final ObjectMapper objectMapper;
	
	@Autowired
	public CovidTrackerService(RestTemplate restTemplate, ObjectMapper objectMapper) {
		this.restTemplate = restTemplate;
		this.objectMapper = objectMapper;
	}
	
	@Cacheable("covid-api")
	public Country getCountryData(String code) {
		if (code.equals("global"))
			return getGlobalData();
		Country country = null;
		try {
			String data = restTemplate.getForObject("https://corona-api.com/countries/" + code, String.class);
			country = objectMapper.readValue(data, new TypeReference<CovidDTO<Country>>(){}).getData();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return country;
	}
	
	@Cacheable("covid-api")
	public Country getGlobalData() {
		Country country = null;
		try {
			String data = restTemplate.getForObject("https://corona-api.com/timeline", String.class);
			Timeline[] timelines = objectMapper.readValue(data, new TypeReference<CovidDTO<Timeline[]>>(){}).getData();
			LatestData latestData = new LatestData(timelines[0].getDeaths(), timelines[0].getConfirmed(), timelines[0].getRecovered());
			country = new Country("global","global", Long.valueOf(7800000000L),latestData, Arrays.asList(timelines));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return country;
	}
}
