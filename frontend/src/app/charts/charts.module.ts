import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { PerformanceHorizontalBarComponent } from './performance-horizontal-bar/performance-horizontal-bar.component';

@NgModule({
  declarations: [PerformanceHorizontalBarComponent],
  imports: [CommonModule, ProgressBarModule, FlexLayoutModule],
})
export class ChartsModule {}
