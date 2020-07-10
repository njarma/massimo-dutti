import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  Usuario = {} as User;
  token: any;
  recuerdame = false;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }


  olvidePassword() {
  }

  onLogin(loginForm: NgForm) {
  }

}
