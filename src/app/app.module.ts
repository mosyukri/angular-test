import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { FormsModule } from '@angular/forms';
import { EMPLOYEE } from './mock-employee';
@NgModule({
  declarations: [ //declare components
    AppComponent,
    TableComponent,
    EmployeeComponent,
    AddComponent,

  ],
  imports: [ //import other modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule, FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule {


}
