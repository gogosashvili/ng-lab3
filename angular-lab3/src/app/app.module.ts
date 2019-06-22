import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentItemComponent } from './student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentManagementComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
