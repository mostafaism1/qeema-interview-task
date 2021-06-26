import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentGridComponent } from './department-grid/department-grid.component';



@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentGridComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    MatGridListModule
  ]
})
export class DepartmentsModule { }
