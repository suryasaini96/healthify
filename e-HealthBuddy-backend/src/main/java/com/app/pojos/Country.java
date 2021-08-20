package com.app.pojos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Country {
    private String name;
    private String code;
    private Long population;
    private LatestData latest_data;
    private List<Timeline> timeline;
}
