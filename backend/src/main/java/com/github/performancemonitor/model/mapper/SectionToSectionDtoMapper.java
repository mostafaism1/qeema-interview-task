package com.github.performancemonitor.model.mapper;

import java.util.function.Function;

import com.github.performancemonitor.model.dto.SectionDto;
import com.github.performancemonitor.model.entity.Section;

import org.springframework.stereotype.Component;

@Component
public class SectionToSectionDtoMapper implements Function<Section, SectionDto> {

    @Override
    public SectionDto apply(Section section) {

        return section == null ? null
                : SectionDto.builder().id(section.getId()).name(section.getName())
                        .departmentId(section.getDepartment().getId()).build();

    }

}
