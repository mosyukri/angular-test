import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { TableComponent } from 'src/app/table/table.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor(private empserv: EmployeeService, private tab: TableComponent) { }

empl: any = {}

  ngOnInit(): void {
  }

  addemp() {
    this.tab.addFieldValue(this.empl)
    console.log(this.empl)
    console.log("from add component")
  }

}
