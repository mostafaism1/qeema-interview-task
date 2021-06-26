import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageDonutComponent } from './percentage-donut.component';

describe('PercentageDonutComponent', () => {
  let component: PercentageDonutComponent;
  let fixture: ComponentFixture<PercentageDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageDonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
