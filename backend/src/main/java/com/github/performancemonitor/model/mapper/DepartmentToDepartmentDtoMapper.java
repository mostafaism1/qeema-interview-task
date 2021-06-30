package com.github.performancemonitor.model.mapper;

import java.util.function.Function;

import com.github.performancemonitor.model.dto.DepartmentDto;
import com.github.performancemonitor.model.entity.Department;

import org.springframework.stereotype.Component;

@Component
public class DepartmentToDepartmentDtoMapper implements Function<Department, DepartmentDto> {

    @Override
    public DepartmentDto apply(Department department) {

        return department == null ? null
                : DepartmentDto.builder().id(department.getId()).name(department.getName())
                        .logoUrl(department.getLogoUrl()).build();
    }

}
