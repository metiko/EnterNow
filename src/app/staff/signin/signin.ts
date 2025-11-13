import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin implements OnInit {
constructor(private fb: FormBuilder ) {}
signinForm!: FormGroup;

ngOnInit(): void{
  this.buildForm();
}

companyName: string = 'EnterNow Inc.';
showName: boolean = true;
userCase: string = 'Staff';

buildForm() {
  this.signinForm = this.fb.group({
    staffId: ['exampleStaffId', [Validators.required]],
    password: ['examplePassword', [Validators.required, Validators.minLength(8)]],
  });
}

submitForm() {
  console.log(this.signinForm.value);
}
}
