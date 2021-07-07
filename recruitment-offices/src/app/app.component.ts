import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {User} from "./model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  displayRecruitment = false;
  displayADLSA = false;
  display = true;


  constructor(private location: Location, private router: Router) {
    this.title = 'Recruitment Offices Application';

  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onPressHome(){
    this.location.back();
  }

  onPressRecruitment() {
     this.display = false;
     this.displayRecruitment = true;
    // this.displayADLSA = false;
  }
  onPressADLSA(){
    this.display = false;
    this.displayADLSA = true;
    // this.displayRecruitment = false;
  }
  onPressHomee(){
    this.display = true;
    this.displayADLSA = false;
    this.displayRecruitment = false;
  }
}
