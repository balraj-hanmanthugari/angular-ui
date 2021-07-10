import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails: any = {
    emailId: '',
    password: ''
  };
  isUserExists = false;

  constructor(private router: Router, private userService: UserService) {}

  loginUser() {
    this.userService.loginUser(this.loginDetails).subscribe((response: any) => {
      if (response.status === 'success' && response.data.token) {
        this.userService.setUser(response.data.user, response.data.token);
        this.isUserExists = false;
        this.router.navigate(['home']);
      } else {
        this.isUserExists = true;
      }
    });
  }

  ngOnInit(): void {
    if (this.userService.isUserAuthenticated()) {
      this.router.navigate(['home']);
    }
  }
}
