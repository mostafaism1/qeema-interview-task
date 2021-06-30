package com.github.performancemonitor.model.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.lang.Nullable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "department")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @NotBlank
    @Column(name = "name", unique = true)
    private String name;

    @Nullable
    @Column(name = "logo_url")
    private String logoUrl;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "department")
    private List<Section> sections;

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "department")
    private DepartmentMilestones departmentMilestones;
}
