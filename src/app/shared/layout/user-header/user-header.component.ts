import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../util/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
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
