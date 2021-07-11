import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../util/user.service';

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
        this.userService.setAuthData(response.data);
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
