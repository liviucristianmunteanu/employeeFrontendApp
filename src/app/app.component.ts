import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl} from '@angular/forms';




export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees: Employee[] = [];
  name!: string;
  mybreakpoint: number | undefined;

  constructor (private employeeService:EmployeeService,
    public dialog: MatDialog){}

  ngOnInit(): void {
      this.getEmployees();
      this.name;
      this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 6;
  }
  handleSize(event:any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 6;
    }
  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=>{
        this.employees=response;
      }
    );
  }
}
