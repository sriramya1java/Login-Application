import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {UserLogin} from "./userlogin";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  result : any;
  userDetails = new UserLogin();
  submitted = false;
  constructor(private dataService: DataService,
              private location: Location) {}

  ngOnInit() {
  }



  private validate(): void {
    console.log(this.userDetails);
    this.dataService.validate(this.userDetails).then(
      loginResult =>{
        this.result = loginResult['_body'];
        console.log("Result is: " +this.result);
      })
  }

  onSubmit() {
    this.submitted = true;
    this.validate();
  }

  goBack(): void {
    this.location.back();
  }
}
