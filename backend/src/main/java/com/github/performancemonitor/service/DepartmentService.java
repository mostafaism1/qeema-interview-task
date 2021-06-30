package com.github.performancemonitor.service;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;
import com.github.performancemonitor.model.entity.DepartmentMilestones;
import com.github.performancemonitor.model.entity.Section;

public interface DepartmentService {

    List<Department> getAllDepartments();

    DepartmentMilestones getDepartmentMilestones(long departmentId);

    List<Section> getDepartmentSections(long departmentId);

}
