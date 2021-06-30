import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentMilestones } from '../models/department-milestones.model';
import { Department } from '../models/department.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultDepartmentService implements DepartmentService {
  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('/api/departments');
  }

  getDepartmentMilestones(
    departmentId: number
  ): Observable<DepartmentMilestones> {
    return this.http.get<DepartmentMilestones>(
      '/api/departments/' + departmentId + '/milestones'
    );
  }
}
