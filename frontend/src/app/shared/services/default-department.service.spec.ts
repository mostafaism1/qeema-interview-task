import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DepartmentMilestones } from '../models/department-milestones.model';
import { Department } from '../models/department.model';
import { DefaultDepartmentService } from './default-department.service';
import { DepartmentService } from './department.service';

describe('DefaultDepartmentService', () => {
  let service: DepartmentService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let department1: Department;
  let department2: Department;
  let departmentMilestones: DepartmentMilestones;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spy }],
    });
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(DefaultDepartmentService);
    department1 = {
      id: 1,
      name: 'Delivery',
      logoUrl: 'https://image.flaticon.com/icons/png/512/233/233664.png',
    };
    department2 = {
      id: 2,
      name: 'Service Assurance',
      logoUrl: 'https://icon-library.com/images/icon-lens/icon-lens-10.jpg',
    };
    departmentMilestones = {
      DTC: { actual: 55, planned: 80, change: 10 },
      DEN: { actual: 90, planned: 90, change: 0 },
      departmentId: 1,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all departments given 1 department', (done: DoneFn) => {
    // Given.
    let expected: Department[] = [department1];
    httpClientSpy.get.and.returnValue(of(expected));

    // When, then.
    service
      .getAllDepartments()
      .subscribe((actual) => expect(actual).toEqual(expected));
    done();
  });

  it('should get all departments given 2 departments', (done: DoneFn) => {
    // Given.
    let expected: Department[] = [department1, department2];
    httpClientSpy.get.and.returnValue(of(expected));

    // When, then.
    service
      .getAllDepartments()
      .subscribe((actual) => expect(actual).toEqual(expected));
    done();
  });

  it('should get department milestone', (done: DoneFn) => {
    // Given.
    let expected: DepartmentMilestones = departmentMilestones;
    httpClientSpy.get.and.returnValue(of(expected));

    // When, then.
    service
      .getDepartmentMilestones(1)
      .subscribe((actual) => expect(actual).toEqual(expected));
    done();
  });
});
