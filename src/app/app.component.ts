import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees: Employee[] = [];

  constructor (private employeeService:EmployeeService){}

  ngOnInit(): void {
      this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=>{
        this.employees=response;
      }
    );
  }
}
