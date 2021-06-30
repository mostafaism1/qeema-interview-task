package com.github.performancemonitor.service;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;
import com.github.performancemonitor.repository.DepartmentRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DefaultDepartmentService implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.getAllByOrderById();
    }

}
