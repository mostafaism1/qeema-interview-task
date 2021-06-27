import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicThemesProgressComponent } from './strategic-themes-progress.component';

describe('StrategicThemesProgressComponent', () => {
  let component: StrategicThemesProgressComponent;
  let fixture: ComponentFixture<StrategicThemesProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicThemesProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicThemesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
