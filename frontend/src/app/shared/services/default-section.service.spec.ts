import { TestBed } from '@angular/core/testing';

import { DefaultSectionService } from './default-section.service';

describe('DefaultSectionService', () => {
  let service: DefaultSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
