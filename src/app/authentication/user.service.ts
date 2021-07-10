import { Injectable } from '@angular/core';
import { AjaxService } from '../util/ajax.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any = {};
  userSubject = new BehaviorSubject({});

  constructor(private ajaxService: AjaxService) {
    this.setUser();
  }

  setUser(user = {}, token = '') {
    this.user = { ...user, token };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject;
  }

  isUserAuthenticated() {
    return this.user && this.user.token ? true : false;
  }

  loginUser(loginDetails) {
    return this.ajaxService.ajaxPostCall('regLogin/login', loginDetails);
  }

  logoutUser() {
    return this.ajaxService.ajaxGetCall('regLogin/logout');
  }
}
