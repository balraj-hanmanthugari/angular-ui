import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginDetails: any = {
    emailId: "",
    password: "",
  };
  isNoUserMatched = false;

  constructor(private router: Router, private userUservice: UserService) {}

  loginUser() {
    this.userUservice
      .loginUser(this.loginDetails)
      .subscribe((response: any) => {
        if (response.status === "success" && response.data.token) {
          this.userUservice.setToken(response.data.token);
          this.userUservice.setUser(response.data.user);
          this.isNoUserMatched = false;
          this.router.navigate(["home"]);
        } else {
          this.isNoUserMatched = true;
        }
      });
  }

  ngOnInit(): void {
    this.userUservice.setToken("");
    this.userUservice.setUser({});
  }
}
