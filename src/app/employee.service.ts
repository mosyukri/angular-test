import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, ApplicationRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from './employee';
import { EMPLOYEE } from './mock-employee';
import { catchError, map, tap } from 'rxjs/operators';
import { TableComponent } from './table/table.component';
const url = 'https://localhost:44333';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private httpClient: HttpClient, private changeDetectorRefs: ApplicationRef) {
    console.log("hello from services")
  }

  getempAngular(): Employee[] { return EMPLOYEE }

  public getEmp(): Observable<Employee[]> {
    // const headers = new HttpHeaders({'content-type':'application/json'});
    // const options = {headers:headers};
    // // const params = new HttpParams().set('id','3');`

    return this.httpClient.get<Employee[]>("http://localhost:5000/Employee/getall");

  }

  public addEmp(e: any) {
    let headers = { 'content-type': 'application/json' }
    console.log(e)
    let body = JSON.stringify(e, ['employeeNumber', 'firstName', 'lastName', 'employeeStatus']);
    console.log("body : " + body)
    return this.httpClient.post("http://localhost:5000/Employee/save?", e, { 'headers': headers })
    // return this.httpClient.post("http://localhost:5000/Employee/save", e,{'headers' : headers})
  }

}
