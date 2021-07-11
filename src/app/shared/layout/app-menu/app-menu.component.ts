import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../util/user.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  menu: any;
  subMenu: any;
  menuItem: any;

  constructor(
    private menuService: MenuService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.menu = this.menuService.menu;
    this.prepareMenu();
  }

  prepareMenu() {
    this.userService.getUser().subscribe((user: any) => {
      this.menuItem = this.menuService.getMenuItem(user.role);
    });
  }

  getSubMenu(menuItem) {
    this.subMenu = this.menuService.getSubMenu(menuItem);
  }
}
