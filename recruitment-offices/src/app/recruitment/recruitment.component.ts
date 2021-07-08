import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from "@angular/common";
import {RecruitmentUserComponent} from "../recruitment-user/recruitment-user.component";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent {
  currentUser: any;
  labourLicenseNo: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.labourLicenseNo = this.currentUser.username;
  }
}
