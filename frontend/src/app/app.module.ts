import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DefaultDepartmentService } from './shared/services/default-department.service';
import { DefaultSectionService } from './shared/services/default-section.service';
import { DepartmentService } from './shared/services/department.service';
import { SectionService } from './shared/services/section.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [
    { provide: DepartmentService, useClass: DefaultDepartmentService },
    { provide: SectionService, useClass: DefaultSectionService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
