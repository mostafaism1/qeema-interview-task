import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsModule } from '../charts/charts.module';
import { DepartmentGridComponent } from './department-grid/department-grid.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';

@NgModule({
  declarations: [DepartmentsComponent, DepartmentGridComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule
  ],
})
export class DepartmentsModule {}
