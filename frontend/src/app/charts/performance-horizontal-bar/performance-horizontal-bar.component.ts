import { Component, Input, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-angular-progressbar';

@Component({
  selector: 'pm-performance-horizontal-bar',
  templateUrl: './performance-horizontal-bar.component.html',
  styleUrls: ['./performance-horizontal-bar.component.scss'],
})
export class PerformanceHorizontalBarComponent implements OnInit {
  @Input() label: string;
  @Input() percent: number;
  readonly trackColor: string = 'LightGrey';
  readonly animation: AnimationModel = {
    enable: true,
    duration: 1000,
    delay: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  // Get progress bar color based on its value.
  getProgressColor(value: number): string {
    return this.getGreenToRed(value);
  }

  // Helper methods.

  // Map a percentage value to a color on a linear grade of red to green.
  private getGreenToRed(percent: number): string {
    const red =
      percent < 50 ? 255 : Math.floor(255 - ((percent * 2 - 100) * 255) / 100);
    const green = percent > 50 ? 255 : Math.floor((percent * 2 * 255) / 100);
    return 'rgb(' + red + ',' + green + ',0)';
  }
}
