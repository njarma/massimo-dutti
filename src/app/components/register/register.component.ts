import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserLocalStorageService } from '../../services/user-local-storage.service';
import { SpinnerService } from '../../services/spinner.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  User = {} as User;
  token: any;
  recuerdame = false;
  hide = true;

  constructor(private router: Router,
              private userService: UserLocalStorageService,
              private spinnerService: SpinnerService,
              private toasterService: ToasterService) { }

  ngOnInit(): void {
  }

  Register(registerForm: NgForm) {
    this.spinnerService.setShowSpinner(true);

    if (registerForm.form.invalid) {
      this.spinnerService.setShowSpinner(false);
      return;
    }
    this.User.firstName = registerForm.form.value.firstName;
    this.User.lastName = registerForm.form.value.lastName;
    this.User.username = registerForm.form.value.username;
    this.User.password = registerForm.form.value.password;

    this.userService.Create(this.User, (result) => {
      if (result && result.success) {
        this.toasterService.pop('success', 'Success', 'Registration successful');
        this.spinnerService.setShowSpinner(false);
        this.router.navigate([`login`]);
      } else {
        // Toastr result.message
        this.toasterService.pop('error', 'Error', result.message);
        this.spinnerService.setShowSpinner(false);
      }
    });

  }

}
