import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CONFIG } from 'src/config/config';
import { SectionPercent } from '../models/section-percent.model';
import { SectionPerformance } from '../models/section-performance.model';
import { Section } from '../models/section.model';
import { SectionService } from './section.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultSectionService implements SectionService {
  private apiUrl: string = CONFIG.apiUrl;

  constructor(private http: HttpClient) {}

  getSectionsByDepartment(departmentId: number): Observable<Section[]> {
    return this.http.get<Section[]>(
      this.apiUrl + 'departments/' + departmentId + '/sections'
    );
  }
  getSectionPerformance(sectionId: number): Observable<SectionPerformance> {
    return this.http
      .get<SectionPercent>(this.apiUrl + 'sections/' + sectionId + '/percent')
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
