package com.github.performancemonitor.service;

import com.github.performancemonitor.model.entity.Section;
import com.github.performancemonitor.model.entity.SectionPercent;
import com.github.performancemonitor.repository.SectionRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DefaultSectionService implements SectionService {

    private final SectionRepository sectionRepository;

    @Override
    public SectionPercent getSecionPercent(long sectionId) {
        Section section = sectionRepository.findById(sectionId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid section id"));
        return section.getSectionPercent();
    }

}
