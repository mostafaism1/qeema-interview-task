package com.github.performancemonitor.service;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;
import com.github.performancemonitor.model.entity.Section;
import com.github.performancemonitor.repository.DepartmentRepository;
import com.github.performancemonitor.repository.SectionRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DefaultSectionService implements SectionService {

    private final DepartmentRepository departmentRepository;
    private final SectionRepository sectionRepository;

    @Override
    public List<Section> getDepartmentSections(long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid department id"));
        return sectionRepository.getByDepartmentOrderById(department);
    }

}
