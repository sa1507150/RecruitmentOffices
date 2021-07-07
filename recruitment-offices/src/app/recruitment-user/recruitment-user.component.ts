import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdlsaUserService} from "../service/adlsa-user.service";
import {User} from "../model/user";
import {RecruitmentUserService} from "../service/recruitment-user.service";


@Component({
  selector: 'app-recruitment-user',
  templateUrl: './recruitment-user.component.html',
  styleUrls: ['./recruitment-user.component.css']
})
export class RecruitmentUserComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private recruitmentUserService: RecruitmentUserService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const user = new User();
    user.username = this.loginForm.controls.username.value;
    user.password = this.loginForm.controls.password.value;
    // {
    //   username: this.loginForm.controls.username.value,
    //   password: this.loginForm.controls.password.value
    // }
    this.recruitmentUserService.login(user).subscribe(data => {
      debugger;
      if(!data.loggedIn) {
        alert("Welcome" + user.username);
        this.router.navigate(['/recruitment']);
      }else {
        this.invalidLogin = true;
        alert("User already Logged In");
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
