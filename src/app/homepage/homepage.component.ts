import { Component, OnInit } from '@angular/core';
import {Schedule} from "./schedule";
import {DataService} from "../data.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  today: any;
  dd: any;
   mm: any;
   yyyy: any;
   minutes: any;
   hours: any;

   schedule = new Schedule();
   submitted = false;
  constructor(public dataservice: DataService, public location:Location) { }

  ngOnInit() {
    this.schedule.currentDate = this.getCurrentTime();
    this.schedule.currentTime = this.getCurrentDate();
    console.log(this.getCurrentTime());
    console.log(this.getCurrentDate());
  }

  getCurrentTime(){
    let currentTime = new Date();
      this.hours = currentTime.getHours();
      this.minutes = currentTime.getMinutes();

    if (this.minutes < 10) {
      this.minutes = "0" + this.minutes;
    }
    return this.hours + ":" + this.minutes;

  }

  getCurrentDate(){
     this.today = new Date();
    this.dd =  this.today.getDate();
    this.mm =  this.today.getMonth()+1; //January is 0!
    this.yyyy =  this.today.getFullYear();

    if( this.dd<10) {
      this.dd = '0'+ this.dd
    }

    if( this.mm<10) {
      this.mm = '0'+ this.mm
    }

    return  this.today =  this.mm + '/' +  this.dd + '/' +  this.yyyy;
  }

  generateBatch(){
    this.dataservice.generateBatchFile(this.schedule);
    console.log(this.schedule);
  }

  onSubmit() {
    this.submitted = true;
    this.generateBatch()
  }

  goBack(): void {
    this.location.back();
  }
}
