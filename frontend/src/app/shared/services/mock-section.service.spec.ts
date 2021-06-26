import { TestBed } from '@angular/core/testing';

import { MockSectionService } from './mock-section.service';

describe('MockSectionService', () => {
  let service: MockSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
