import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})



export class AppComponent {
  title = 'Orsted Angular Test';

  constructor( private empserve: EmployeeService){}
  onEmployee()
  {
     console.log("button clicked");
  }


}
