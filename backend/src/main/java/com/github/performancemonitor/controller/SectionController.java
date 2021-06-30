package com.github.performancemonitor.controller;

import com.github.performancemonitor.model.dto.SectionPercentDto;
import com.github.performancemonitor.model.entity.SectionPercent;
import com.github.performancemonitor.model.mapper.SectionPercentToSectionPercentDtoMapper;
import com.github.performancemonitor.service.SectionService;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/sections", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class SectionController {

    private final SectionService sectionService;
    private final SectionPercentToSectionPercentDtoMapper sectionPercentMapper;

    @GetMapping(path = "/{sectionId}/percent")
    @ResponseStatus(code = HttpStatus.OK)
    public SectionPercentDto getSectionPercent(@PathVariable(name = "sectionId") long sectionId) {
        SectionPercent sectionPercent = sectionService.getSecionPercent(sectionId);
        return sectionPercentMapper.apply(sectionPercent);
    }

}
