import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {User} from "./model/user";
import {Router} from "@angular/router";
import {TokenStorageService} from "./service/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  displayRecruitment = false;
  displayADLSA = false;
  display = true;


  constructor(private location: Location, private router: Router, private tokenStorageService: TokenStorageService) {
    this.title = 'Recruitment Offices Application';

  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onPressBack(){
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
  onPressHome(){
    this.display = true;
    this.displayADLSA = false;
    this.displayRecruitment = false;
  }

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
