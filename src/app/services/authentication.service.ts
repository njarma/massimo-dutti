import { Injectable } from '@angular/core';
import { UserLocalStorageService } from './user-local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly AUTH_DATA = 'authdata';
  private readonly CURRENT_USER = 'currentUser';
  private readonly EXPIRATION = 'expiration';

  constructor(private userService: UserLocalStorageService,
              private router: Router) { }


  /* Dummy authentication for testing, uses $timeout to simulate api call
    ----------------------------------------------*/

    Login(username, password, callback: any): any {
      setTimeout(() => {
        let response;
        this.userService.GetByUsername(username).subscribe(
          data => {
            if (data && data.password === password) {
              response = { success: true };
            } else {
              response = { success: false, message: 'Username or password is incorrect' };
            }
            callback(response);
          });
      }, 1000);
    }

  SetCredentials(username, password) {
    const authdata = btoa(`${username}:${password}`);
    const expire = new Date(604800000);
    const currentUser = {
      username,
      authdata
    };
    localStorage.setItem(this.AUTH_DATA, authdata);
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(currentUser));
    localStorage.setItem(this.EXPIRATION, expire.toISOString());
  }

  clearCredentials() {
      localStorage.removeItem(this.AUTH_DATA);
      localStorage.removeItem(this.CURRENT_USER);
      localStorage.removeItem(this.EXPIRATION);
  }

  public getCurrentUser() {
    const currentUser = localStorage.getItem(this.CURRENT_USER);

    if (!currentUser) {
      return;
    }
    return currentUser;
  }


  getIsAuth() {
    const authInformation = this.getCurrentUser();
    if (!authInformation) {
      return false;
    }

    return true;
  }

  logout() {
    this.clearCredentials();
    this.router.navigate(['login']);
  }

}

