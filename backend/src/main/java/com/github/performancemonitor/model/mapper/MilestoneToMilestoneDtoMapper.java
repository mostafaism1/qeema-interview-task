package com.github.performancemonitor.model.mapper;

import java.util.function.Function;

import com.github.performancemonitor.model.dto.MilestoneDto;
import com.github.performancemonitor.model.entity.Milestone;

import org.springframework.stereotype.Component;

@Component
public class MilestoneToMilestoneDtoMapper implements Function<Milestone, MilestoneDto> {

    @Override
    public MilestoneDto apply(Milestone milestone) {
        return milestone == null ? null
                : MilestoneDto.builder().actual(milestone.getActual()).planned(milestone.getPlanned())
                        .change(milestone.getChange()).build();
    }

}
