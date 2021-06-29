package com.github.performancemonitor.model.entity;

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
@Table(name = "section_percent")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SectionPercent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JoinColumn(name = "id")
    private long id;

    @JoinColumn(name = "percent")
    private int percent;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "section_id")
    private Section section;

}
