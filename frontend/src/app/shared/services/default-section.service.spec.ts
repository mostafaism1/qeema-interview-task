import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SectionPercent } from '../models/section-percent.model';
import { SectionPerformance } from '../models/section-performance.model';
import { Section } from '../models/section.model';
import { DefaultSectionService } from './default-section.service';
import { SectionService } from './section.service';

describe('DefaultSectionService', () => {
  let service: SectionService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let section1: Section;
  let section2: Section;
  let sectionPercent: SectionPercent;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spy }],
    });
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(DefaultSectionService);
    section1 = {
      id: 1,
      name: 'Governence',
      departmentId: 1,
    };
    section2 = {
      id: 2,
      name: 'Digital Transform',
      departmentId: 1,
    };
    sectionPercent = {
      id: 1,
      percent: 48,
      sectionId: 1,
      sectionName: 'Governence',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get sections by department given 1 section', () => {
    // Given.
    let expected: Section[] = [section1];
    httpClientSpy.get.and.returnValue(of(expected));

    // When, then.
    service
      .getSectionsByDepartment(1)
      .subscribe((actual) => expect(actual).toEqual(expected));
  });

  it('should get sections by department given 2 section', () => {
    // Given.
    let expected: Section[] = [section1, section2];
    httpClientSpy.get.and.returnValue(of(expected));

    // When, then.
    service
      .getSectionsByDepartment(1)
      .subscribe((actual) => expect(actual).toEqual(expected));
  });

  it('should get section performance', () => {
    // Given.
    let stub: SectionPercent = sectionPercent;
    let expected: SectionPerformance = {
      sectionId: stub.id,
      performance: { label: stub.sectionName, percent: stub.percent },
    };
    httpClientSpy.get.and.returnValue(of(stub));

    // When, then.
    service
      .getSectionPerformance(1)
      .subscribe((actual) => expect(actual).toEqual(expected));
  });
});
