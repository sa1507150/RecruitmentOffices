import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdlsaUserService} from "../service/adlsa-user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-adlsa-user',
  templateUrl: './adlsa-user.component.html',
  styleUrls: ['./adlsa-user.component.css']
})
export class AdlsaUserComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private adlsaUserService: AdlsaUserService) { }

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
    this.adlsaUserService.login(user).subscribe(data => {
      debugger;
      if(!data.loggedIn) {
        this.router.navigate(['/adlsa']);
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
