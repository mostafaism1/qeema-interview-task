import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  {
    path: 'departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
