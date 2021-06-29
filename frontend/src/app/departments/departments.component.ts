import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Department } from '../shared/models/department.model';
import { Performance } from '../shared/models/performance.model';
import { SectionPerformance } from '../shared/models/section-performance.model';
import { Section } from '../shared/models/section.model';
import { DepartmentService } from '../shared/services/department.service';
import { MockDepartmentService } from '../shared/services/mock-department.service';
import { MockSectionService } from '../shared/services/mock-section.service';
import { SectionService } from '../shared/services/section.service';

@Component({
  selector: 'pm-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers: [
    { provide: DepartmentService, useClass: MockDepartmentService },
    { provide: SectionService, useClass: MockSectionService },
  ],
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  performances: Performance[] = [];
  activeDepartmentId: number;
  showStrategicThemesProgress: boolean = false;

  constructor(
    private departmentService: DepartmentService,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.departmentService
      .getAllDepartments()
      .subscribe((departments) => (this.departments = departments));
  }

  departmentClickHandler(departmentId: number) {
    if (departmentId == this.activeDepartmentId) {
      this.toggleStrategicThemesProgress();
      return;
    }
    this.changeActiveDepartment(departmentId);
  }

  getDepartmentPerformances(departmentId: number): void {
    // Clear performances.
    this.performances = [];

    // Get section performances for the department with departmentId, and subscribe this.performances to it.
    let sections$: Observable<Section[]> =
      this.sectionService.getSectionsByDepartment(departmentId);

    let sectionPerformances$: Observable<SectionPerformance[]> = sections$.pipe(
      map((sections) =>
        sections.map((s) => this.sectionService.getSectionPerformance(s.id))
      ),
      switchMap((_) => combineLatest(_))
    );

    let performances$: Observable<Performance[]> = sectionPerformances$.pipe(
      map((sps) => sps.map((sp) => sp?.performance))
    );

    performances$.subscribe((ps) => (this.performances = ps));
  }

  // Helper methods.

  private toggleStrategicThemesProgress(): void {
    this.showStrategicThemesProgress = !this.showStrategicThemesProgress;
  }

  private changeActiveDepartment(departmentId: number): void {
    this.activeDepartmentId = departmentId;
    this.getDepartmentPerformances(departmentId);
    this.showStrategicThemesProgress = true;
  }
}
