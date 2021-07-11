import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../util/user.service';
import { MenuService } from '../user-menu.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  userMenu: any;

  constructor(
    private menuService: MenuService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.userMenu = this.menuService.getUserMenu(user.role);
    });
  }
}
