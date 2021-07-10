import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.userService.isUserAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
