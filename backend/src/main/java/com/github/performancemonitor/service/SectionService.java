package com.github.performancemonitor.service;

import java.util.List;

import com.github.performancemonitor.model.entity.Section;

public interface SectionService {

    List<Section> getDepartmentSections(long departmentId);

}
