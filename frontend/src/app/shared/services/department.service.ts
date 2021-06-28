import { Observable } from 'rxjs';
import { DepartmentMilestones } from '../models/department-milestones.model';
import { Department } from '../models/department.model';

export abstract class DepartmentService {
  abstract getAllDepartments(): Observable<Department[]>;
  abstract getDepartmentMilestones(
    departmentId: number
  ): Observable<DepartmentMilestones>;
}
