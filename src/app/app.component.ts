import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


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
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name:this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.employees = result;
    });
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=>{
        this.employees=response;
      }
    );
  }
}




@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',

})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

}
