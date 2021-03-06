import { Component, Input, OnInit } from '@angular/core';
import { Performance } from '../../shared/models/performance.model';

@Component({
  selector: 'pm-strategic-themes-progress',
  templateUrl: './strategic-themes-progress.component.html',
  styleUrls: ['./strategic-themes-progress.component.scss'],
})
export class StrategicThemesProgressComponent implements OnInit {
  @Input() performances: Performance[];
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  computeAveragePercent(performances: Performance[]): number {
    return (
      performances.map((p) => p.percent).reduce((a, b) => a + b) /
      performances.length
    );
  }

  // computes the number of performances with a percent less than 50.
  computeRiskCount(performances: Performance[]): number {
    return performances.filter((p) => p.percent < 50).length;
  }
}
