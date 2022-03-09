import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EMPLOYEE } from '../mock-employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor(private empServ: EmployeeService, private changeDetectorRefs:ChangeDetectorRef ) { }
  displayedColumns: string[] = ['demo-number', 'demo-fname', 'demo-lname', 'demo-stat'];
  fieldArray: Array<Employee> = [];
  emp: any = {};
  ngOnInit(): void {
    this.updateTableContent()
  }

  addFieldValue(e:Employee) {
    console.log("try adding")
    let js = JSON.stringify(e, Object.getOwnPropertyNames(e))
    console.log(Object.getOwnPropertyNames(e))
     this.empServ.addEmp(e).subscribe(res =>{ console.log(res) 
      this.ngOnInit()})
   
  }

  deleteFieldValue(index: number) {
    this.fieldArray.splice(index, 1);
  }
  updateTableContent() {
    this.empServ.getEmp().subscribe(result => {
      this.fieldArray = result
      console.log(this.fieldArray)

    })
    console.log("truely")
  }

  refresh()
  {
    this.changeDetectorRefs.detectChanges();
    console.log(this.fieldArray)

  }

}
