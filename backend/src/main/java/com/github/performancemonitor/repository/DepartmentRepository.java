package com.github.performancemonitor.repository;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends CrudRepository<Department, Long> {

    List<Department> getAllByOrderById();

}
