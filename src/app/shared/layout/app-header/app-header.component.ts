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

  ngOnInit(): void {}

  navigateToSignUp() {
    this.router.navigate(['/authenticate/registration']);
  }

  navigateToSignIn() {
    this.router.navigate(['/authenticate/login']);
  }

  navigateToContact() {
    console.log('Contact Page is Temporarily Unavailable');
    //this.router.navigate(['/contact']);
  }
}
