import { Observable } from "rxjs";
import { SectionPerformance } from "../models/section-performance.model";
import { Section } from "../models/section.model";

export abstract class SectionService {
  abstract getSectionsByDepartment(departmentId: number): Observable<Section[]>;
  abstract getSectionPerformance(sectionId: number): Observable<SectionPerformance | undefined>;
}
