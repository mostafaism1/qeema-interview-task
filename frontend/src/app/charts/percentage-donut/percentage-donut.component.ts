import { Component, Input, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-angular-progressbar';

@Component({
  selector: 'pm-percentage-donut',
  templateUrl: './percentage-donut.component.html',
  styleUrls: ['./percentage-donut.component.scss'],
})
export class PercentageDonutComponent implements OnInit {
  @Input() percent: number;
  readonly animation: AnimationModel = {
    enable: true,
    duration: 2000,
    delay: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
