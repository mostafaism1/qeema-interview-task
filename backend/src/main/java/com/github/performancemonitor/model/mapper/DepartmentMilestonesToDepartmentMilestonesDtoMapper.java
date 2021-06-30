package com.github.performancemonitor.model.mapper;

import java.util.function.Function;

import com.github.performancemonitor.model.dto.DepartmentMilestonesDto;
import com.github.performancemonitor.model.entity.DepartmentMilestones;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class DepartmentMilestonesToDepartmentMilestonesDtoMapper
        implements Function<DepartmentMilestones, DepartmentMilestonesDto> {

    private final MilestoneToMilestoneDtoMapper milestoneMapper;

    @Override
    public DepartmentMilestonesDto apply(DepartmentMilestones departmentMilestones) {
        return departmentMilestones == null ? null
                : DepartmentMilestonesDto.builder().dtc(milestoneMapper.apply(departmentMilestones.getDTC()))
                        .den(milestoneMapper.apply(departmentMilestones.getDEN()))
                        .departmentId(departmentMilestones.getId()).build();
    }

}
