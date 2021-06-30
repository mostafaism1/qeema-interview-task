package com.github.performancemonitor.repository;

import java.util.List;

import com.github.performancemonitor.model.entity.Department;
import com.github.performancemonitor.model.entity.Section;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepository extends CrudRepository<Section, Long> {

    List<Section> getByDepartmentOrderById(Department department);

}
