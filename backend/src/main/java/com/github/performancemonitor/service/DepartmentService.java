package com.github.performancemonitor.service;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;
import com.github.performancemonitor.model.entity.DepartmentMilestones;

public interface DepartmentService {

    List<Department> getAllDepartments();

    DepartmentMilestones getDepartmentMilestones(long departmentId);

}
