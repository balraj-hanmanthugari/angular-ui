import { Injectable } from '@angular/core';
import { AjaxService } from '../util/ajax.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authData: any = {};
  user = new BehaviorSubject({});

  constructor(private ajaxService: AjaxService) {
    this.authData = sessionStorage.getItem('authData')
      ? JSON.parse(sessionStorage.getItem('authData'))
      : {};
  }

  setAuthData(data: any) {
    this.authData = data;
    sessionStorage.setItem('authData', JSON.stringify(data));
    this.user.next(data.user);
  }

  getUser() {
    return this.user;
  }

  isUserAuthenticated() {
    return this.authData && this.authData.token ? true : false;
  }

  loginUser(loginDetails) {
    return this.ajaxService.ajaxPostCall('regLogin/login', loginDetails);
  }

  logoutUser() {
    this.authData = {};
    sessionStorage.removeItem('authData');
    return this.ajaxService.ajaxGetCall('regLogin/logout');
  }
}
