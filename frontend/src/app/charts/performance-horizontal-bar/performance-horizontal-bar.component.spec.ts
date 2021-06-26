import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceHorizontalBarComponent } from './performance-horizontal-bar.component';

describe('PerformanceHorizontalBarComponent', () => {
  let component: PerformanceHorizontalBarComponent;
  let fixture: ComponentFixture<PerformanceHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceHorizontalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
