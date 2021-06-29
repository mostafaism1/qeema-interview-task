package com.github.performancemonitor.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "milestone")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @NotNull
    @Column(name = "actual")
    private int actual;

    @NotNull
    @Column(name = "planned")
    private int planned;

    @NotNull
    @Column(name = "change")
    private int change;

}
