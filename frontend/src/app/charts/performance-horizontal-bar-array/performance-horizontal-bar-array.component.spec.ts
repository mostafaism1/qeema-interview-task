import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceHorizontalBarArrayComponent } from './performance-horizontal-bar-array.component';

describe('PerformanceHorizontalBarArrayComponent', () => {
  let component: PerformanceHorizontalBarArrayComponent;
  let fixture: ComponentFixture<PerformanceHorizontalBarArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceHorizontalBarArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceHorizontalBarArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
