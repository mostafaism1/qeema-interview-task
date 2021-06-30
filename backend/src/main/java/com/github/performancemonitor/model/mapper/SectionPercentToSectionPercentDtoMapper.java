package com.github.performancemonitor.model.mapper;

import java.util.function.Function;

import com.github.performancemonitor.model.dto.SectionPercentDto;
import com.github.performancemonitor.model.entity.SectionPercent;

import org.springframework.stereotype.Component;

@Component
public class SectionPercentToSectionPercentDtoMapper implements Function<SectionPercent, SectionPercentDto> {

    @Override
    public SectionPercentDto apply(SectionPercent sectionPercent) {
        return sectionPercent == null ? null
                : SectionPercentDto.builder().id(sectionPercent.getId()).percent(sectionPercent.getPercent())
                        .sectionId(sectionPercent.getSection().getId())
                        .sectionName(sectionPercent.getSection().getName()).build();
    }

}
