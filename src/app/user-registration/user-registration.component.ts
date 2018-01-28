import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Location } from '@angular/common';
import {register} from "ts-node/dist";
import {DataService} from '../data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registeredResult: any;
  userRegistration: FormGroup;
  genderOptions = ['Female', 'Male', 'Other', 'Rather not to say'];
  locationOptions = ['India', 'London', 'USA', 'UK'];
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted = false;
  constructor(private fb: FormBuilder, private location: Location, private dataService: DataService) { }

  ngOnInit() {
    this.userRegistration = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      birthday: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
     /* location: new FormControl(null, Validators.required)*/

    })
  }

 /* private register(): void {
    console.log(this.userRegistration.value);
    this.dataService.register(this.userRegistration.value)
  }*/

  goBack(): void {
    this.location.back();
  }


  private registered(userValues): void {
    this.dataService.register(userValues).then(
      loginResult =>{
        this.registeredResult = loginResult['_body'];
        console.log("Result is: " +this.registeredResult);
      })
  }

  private onSubmit(): void {
    this.submitted = true;
    let userValues = this.userRegistration['_value'];
    console.log(userValues);
    this.registered(userValues);
  }

  newRegistration() {
    this.goBack();
  }

}
