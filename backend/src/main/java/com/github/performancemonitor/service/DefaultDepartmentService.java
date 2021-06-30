package com.github.performancemonitor.service;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;
import com.github.performancemonitor.model.entity.DepartmentMilestones;
import com.github.performancemonitor.model.entity.Section;
import com.github.performancemonitor.repository.DepartmentRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DefaultDepartmentService implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.getAllByOrderById();
    }

    @Override
    public DepartmentMilestones getDepartmentMilestones(long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid department id"));
        return department.getDepartmentMilestones();
    }

    @Override
    public List<Section> getDepartmentSections(long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid department id"));
        return department.getSections();
    }

}
