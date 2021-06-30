package com.github.performancemonitor.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.github.performancemonitor.model.dto.DepartmentDto;
import com.github.performancemonitor.model.mapper.DepartmentToDepartmentDtoMapper;
import com.github.performancemonitor.service.DepartmentService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/departments")
@AllArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;
    private final DepartmentToDepartmentDtoMapper mapper;

    @GetMapping
    public List<DepartmentDto> getAllDepartments() {
        return departmentService.getAllDepartments().stream().map(mapper).collect(Collectors.toList());
    }

}
