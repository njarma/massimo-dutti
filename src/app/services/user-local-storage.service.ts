import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
// import { ToasterService } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  // constructor(private toaster: ToasterService) { }
  constructor() { }

  GetAll(): Observable<User[]> {
    return of(this.getUsers());
  }

  GetById(id: number): Observable<User> {
    const filtered = this.getUsers().find(x => x.id === id);
    return of(filtered);
  }

  GetByUsername(username: string): Observable<User> {
    const filtered = this.getUsers().find(x => x.username === username);
    return of(filtered);
  }

  Create(user: User, callback: any) {
      setTimeout(() => {
      let response;
      this.GetByUsername(user.username).subscribe(
        duplicateUser => {
          if (duplicateUser) {
            console.error(`Username ${user.username} is already taken`);
            response = { success: false, message: `Username ${user.username} is already taken` };

            // this.toaster.pop('error', 'Duplicate user', `Username ${user.username} is already taken`);
          } else {
            const users = this.getUsers();

            // assign id
            const lastUser = users[users.length - 1] || { id: 0 };
            user.id = lastUser.id + 1;

            // save to local storage
            users.push(user);
            this.setUsers(users);
            response = { success: true };

            callback(response);
          }
        });

      }, 1000);
  }

  Update(user: User) {
    const users = this.getUsers()
                      .map(x => {
                        if (x.id === user.id) {
                          return user;
                        }
                      });
    /* for (let i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
          users[i] = user;
          break;
      }
    } */

    this.setUsers(users);
  }

  Delete(id: number) {
    const users = this.getUsers();

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.id === id) {
          users.splice(i, 1);
          break;
      }
    }

    this.setUsers(users);
  }

  // private functions

  private getUsers(): User[] {
    if (!localStorage.users) {
        localStorage.users = JSON.stringify([]);
    }

    return JSON.parse(localStorage.users);
  }

  private setUsers(users: User[]) {
    localStorage.users = JSON.stringify(users);
  }

}
