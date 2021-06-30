import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SectionPercent } from '../models/section-percent.model';
import { SectionPerformance } from '../models/section-performance.model';
import { Section } from '../models/section.model';
import { SectionService } from './section.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultSectionService implements SectionService {
  constructor(private http: HttpClient) {}

  getSectionsByDepartment(departmentId: number): Observable<Section[]> {
    return this.http.get<Section[]>(
      '/api/departments/' + departmentId + '/sections'
    );
  }
  getSectionPerformance(sectionId: number): Observable<SectionPerformance> {
    return this.http
      .get<SectionPercent>('/api/sections/' + sectionId + '/percent')
      .pipe(map(this.mapSectionPercentToSectionPerformance));
  }

  // Helper methods.
  private mapSectionPercentToSectionPerformance(
    sectionPercent: SectionPercent
  ): SectionPerformance {
    let sectionPerformance: SectionPerformance = {
      sectionId: sectionPercent.sectionId,
      performance: {
        label: sectionPercent.sectionName,
        percent: sectionPercent.percent,
      },
    };
    return sectionPerformance;
  }
}
