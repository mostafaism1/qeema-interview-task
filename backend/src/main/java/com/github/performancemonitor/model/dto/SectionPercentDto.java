package com.github.performancemonitor.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SectionPercentDto {

    private long id;

    private int percent;

    private int sectionId;

    private String sectionName;

}