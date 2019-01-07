import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
message: any; 
  constructor(public navCtrl: NavController) {
this.message = '';
  }

  callMe(){
   // let num = "7158213965";
    window.open("sms:7158213965" + this.message, "_system")

  }
}
