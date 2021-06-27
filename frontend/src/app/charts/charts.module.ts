import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { PercentageDonutComponent } from './percentage-donut/percentage-donut.component';
import { PerformanceHorizontalBarArrayComponent } from './performance-horizontal-bar-array/performance-horizontal-bar-array.component';
import { PerformanceHorizontalBarComponent } from './performance-horizontal-bar/performance-horizontal-bar.component';
import { StrategicThemesProgressComponent } from './strategic-themes-progress/strategic-themes-progress.component';

@NgModule({
  declarations: [
    PerformanceHorizontalBarComponent,
    PercentageDonutComponent,
    PerformanceHorizontalBarArrayComponent,
    StrategicThemesProgressComponent,
  ],
  imports: [CommonModule, ProgressBarModule, FlexLayoutModule, MatCardModule],
})
export class ChartsModule {}
