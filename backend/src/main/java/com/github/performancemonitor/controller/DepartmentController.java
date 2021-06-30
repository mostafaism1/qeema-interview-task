package com.github.performancemonitor.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.github.performancemonitor.model.dto.DepartmentDto;
import com.github.performancemonitor.model.dto.DepartmentMilestonesDto;
import com.github.performancemonitor.model.dto.SectionDto;
import com.github.performancemonitor.model.entity.DepartmentMilestones;
import com.github.performancemonitor.model.mapper.DepartmentMilestonesToDepartmentMilestonesDtoMapper;
import com.github.performancemonitor.model.mapper.DepartmentToDepartmentDtoMapper;
import com.github.performancemonitor.model.mapper.SectionToSectionDtoMapper;
import com.github.performancemonitor.service.DepartmentService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/departments")
@AllArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;
    private final DepartmentToDepartmentDtoMapper departmentMapper;
    private final SectionToSectionDtoMapper sectionMapper;
    private final DepartmentMilestonesToDepartmentMilestonesDtoMapper departmentMilestonesMapper;

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<DepartmentDto> getAllDepartments() {
        return departmentService.getAllDepartments().stream().map(departmentMapper).collect(Collectors.toList());
    }

    @GetMapping("/{departmentId}/sections")
    @ResponseStatus(code = HttpStatus.OK)
    public List<SectionDto> getDepartmentSections(@PathVariable(name = "departmentId") long departmentId) {
        return departmentService.getDepartmentSections(departmentId).stream().map(sectionMapper)
                .collect(Collectors.toList());
    }

    @GetMapping("/{departmentId}/milestones")
    @ResponseStatus(code = HttpStatus.OK)
    public DepartmentMilestonesDto getDepartmentMilestones(@PathVariable(name = "departmentId") long departmentId) {
        DepartmentMilestones departmentMilestones = departmentService.getDepartmentMilestones(departmentId);
        return departmentMilestonesMapper.apply(departmentMilestones);
    }

}
