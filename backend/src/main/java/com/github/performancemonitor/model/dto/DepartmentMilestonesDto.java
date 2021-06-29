package com.github.performancemonitor.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DepartmentMilestonesDto {

    private MilestoneDto dtc;

    private MilestoneDto den;

    private long departmentId;

}
