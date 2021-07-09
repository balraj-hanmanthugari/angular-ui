import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
    /*if (this.userService.isUserAuthenticated()) {
      const user = this.userService.getUserSnapshot();
      let selMenu = this.getTheSelectedMenu(route);
      if (selMenu && selMenu.roles && selMenu.roles.indexOf(user.role) !== -1) {
        return true;
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      }
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
    return false;*/
  }

  getTheSelectedMenu(route) {
    const menus = JSON.parse(localStorage.getItem("menu"));
    for (const menu of menus) {
      if (menu.path.replace("/", "") === route.url[0].path) {
        return menu;
      }
    }
  }
}
