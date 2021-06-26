import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DepartmentMilestones } from '../models/department-milestones.model';
import { Department } from '../models/department.model';
import { DepartmentService } from './department.service';

export class MockDepartmentService implements DepartmentService {
  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('data/departments.json');
  }
  getDepartmentMilestones(
    departmentId: number
  ): Observable<DepartmentMilestones | undefined> {
    return this.http
      .get<DepartmentMilestones[]>('data/departments-milestones')
      .pipe(map((dms) => dms.find((dm) => dm.departmentId == departmentId)));
  }
}
