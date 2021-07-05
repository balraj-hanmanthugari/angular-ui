import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../authentication/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: any = {};

  constructor(private router: Router, private userService: UserService) { }

  navigateToSignUp() {
    this.router.navigate(['/authenticate/registration']);
  }

  navigateToSignIn() {
    this.router.navigate(['/authenticate/login']);
  }

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  openUserInfo() {
    console.log('User Info is Temporarily Unavailable');
  }

  isUserLoggedIn() {
    return this.userService.isUserAuthenticated();
  }

  logoutUser() {
    this.userService.logoutUser().subscribe((response: any) => {
      if (response.status === 'success') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      }
    });
  }

  navigateToContact() {
    console.log('Contact Page is Temporarily Unavailable');
    //this.router.navigate(['/contact']);
  }

  ngOnInit(): void {
    this.getUser();
  }
}
