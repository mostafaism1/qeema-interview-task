import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SectionPerformance } from '../models/section-performance.model';
import { Section } from '../models/section.model';
import { SectionService } from './section.service';

@Injectable({
  providedIn: null,
})
export class MockSectionService implements SectionService {
  constructor(private http: HttpClient) {}

  getSectionsByDepartment(departmentId: number): Observable<Section[]> {
    return this.http.get<Section[]>('data/sections.json');
  }
  getSectionPerformance(sectionId: number): Observable<SectionPerformance> {
    return this.http
      .get<SectionPerformance[]>('data/sections-performances.json')
      .pipe(map((sps) => sps.filter((sp) => sp.sectionId == sectionId)[0]));
  }
}
