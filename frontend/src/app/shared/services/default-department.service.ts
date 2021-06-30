import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from 'src/config/config';
import { DepartmentMilestones } from '../models/department-milestones.model';
import { Department } from '../models/department.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultDepartmentService implements DepartmentService {
  private apiUrl: string = CONFIG.apiUrl;

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + 'departments');
  }

  getDepartmentMilestones(
    departmentId: number
  ): Observable<DepartmentMilestones> {
    return this.http.get<DepartmentMilestones>(
      this.apiUrl + 'departments/' + departmentId + '/milestones'
    );
  }
}
