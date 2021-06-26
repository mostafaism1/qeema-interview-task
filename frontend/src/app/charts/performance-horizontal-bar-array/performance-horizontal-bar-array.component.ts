import { Component, Input, OnInit } from '@angular/core';
import { Performance } from '../../shared/models/performance.model';

@Component({
  selector: 'pm-performance-horizontal-bar-array',
  templateUrl: './performance-horizontal-bar-array.component.html',
  styleUrls: ['./performance-horizontal-bar-array.component.scss'],
})
export class PerformanceHorizontalBarArrayComponent implements OnInit {
  @Input() performances: Performance[];

  constructor() {}

  ngOnInit(): void {}
}
