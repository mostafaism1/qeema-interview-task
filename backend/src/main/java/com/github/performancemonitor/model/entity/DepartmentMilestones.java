package com.github.performancemonitor.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "department_milestones")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DepartmentMilestones {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "dtc_milestone_id")
    private Milestone DTC;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "den_milestone_id")
    private Milestone DEN;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "department_id")
    private Department department;

}
