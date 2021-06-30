package com.github.performancemonitor.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.github.performancemonitor.model.dto.DepartmentDto;
import com.github.performancemonitor.model.dto.SectionDto;
import com.github.performancemonitor.model.mapper.DepartmentToDepartmentDtoMapper;
import com.github.performancemonitor.model.mapper.SectionToSectionDtoMapper;
import com.github.performancemonitor.service.DepartmentService;
import com.github.performancemonitor.service.SectionService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/departments")
@AllArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;
    private final SectionService sectionService;
    private final DepartmentToDepartmentDtoMapper departmentMapper;
    private final SectionToSectionDtoMapper sectionMapper;

    @GetMapping
    public List<DepartmentDto> getAllDepartments() {
        return departmentService.getAllDepartments().stream().map(departmentMapper).collect(Collectors.toList());
    }

    @GetMapping("/{id}/sections")
    public List<SectionDto> getDepartmentSections(@PathVariable(name = "id") long id) {
        return sectionService.getDepartmentSections(id).stream().map(sectionMapper).collect(Collectors.toList());
    }

}
