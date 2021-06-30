import { TestBed } from '@angular/core/testing';

import { DefaultDepartmentService } from './default-department.service';

describe('DefaultDepartmentService', () => {
  let service: DefaultDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
