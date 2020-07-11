import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserLocalStorageService } from '../../services/user-local-storage.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  User = {} as User;
  token: any;
  recuerdame = false;
  hide = true;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private userService: UserLocalStorageService,
              private spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

  setUsuarioPrueba(loginForm) {
    const me = {} as User;
    me.username = loginForm.form.value.username;
    me.password = loginForm.form.value.password;
    me.firstName = Math.round((Math.random() * 100000) + 1).toString();
    me.lastName = Math.round((Math.random() * 100000) + 1).toString();
    me.id = Math.round((Math.random() * 100000) + 1);
    this.userService.Create(me);
  }

  Login(loginForm: NgForm) {
    this.spinnerService.setShowSpinner(true);

    if (loginForm.form.invalid) {
      this.spinnerService.setShowSpinner(false);
      return;
    }
    this.User.username = loginForm.form.value.username;
    this.User.password = loginForm.form.value.password;

    this.authenticationService.Login(this.User.username, this.User.password, (result) => {
      if (result && result.success) {
        this.authenticationService.SetCredentials(this.User.username, this.User.password);
        this.spinnerService.setShowSpinner(false);
        this.router.navigate([`ships`]);
      } else {
        // console.error(result.message);
        this.spinnerService.setShowSpinner(false);
      }

    });
  }

}
