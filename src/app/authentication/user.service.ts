import { Injectable } from "@angular/core";
import { AjaxService } from "../util/ajax.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userSubject = new BehaviorSubject(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );

  constructor(private ajaxService: AjaxService) {}

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject;
  }

  getUserSnapshot() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {};
  }

  isUserAuthenticated() {
    return this.getToken() ? true : false;
  }

  logoutUser() {
    return this.ajaxService.ajaxGetCall("regLogin/logout");
  }

  loginUser(loginDetails) {
    return this.ajaxService.ajaxPostCall("regLogin/login", loginDetails);
  }
}
