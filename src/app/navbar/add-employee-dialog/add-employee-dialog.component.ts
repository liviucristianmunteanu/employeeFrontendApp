import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})
export class AddEmployeeDialogComponent implements OnInit{
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      jobTitle: '',
      phone: '',
      imageUrl: ''
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

}
