import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../util/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: any = {};

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  navigateToSignUp() {
    this.router.navigate(['/authenticate/registration']);
  }

  navigateToSignIn() {
    this.router.navigate(['/authenticate/login']);
  }

  openUserInfo() {
    console.log('User Info is Temporarily Unavailable');
  }

  navigateToContact() {
    console.log('Contact Page is Temporarily Unavailable');
    //this.router.navigate(['/contact']);
  }

  isUserLoggedIn() {
    return this.userService.isUserAuthenticated();
  }

  logoutUser() {
    this.userService.logoutUser().subscribe((response: any) => {
      if (response.status === 'success') {
        this.router.navigate(['/authenticate/login']);
      }
    });
  }
}
