import { Injectable } from '@angular/core';
import { AjaxService } from '../../util/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu = [
    {
      name: 'Home',
      path: '/home',
      roles: ['admin', 'guide', 'user']
    },
    {
      name: 'Tour Packages',
      path: '/tour-packages',
      roles: ['admin', 'guide', 'user']
    },
    {
      name: 'Users',
      path: '/users',
      roles: ['admin']
    },
    {
      name: 'Tours',
      path: '/tours',
      roles: ['admin']
    },
    {
      name: 'Locations',
      path: '/locations',
      roles: ['admin']
    }
  ];
  currentMenu: any;

  constructor(private ajaxService: AjaxService) {}

  getUserMenu(userRole) {
    return this.menu.filter(item => {
      return item.roles.indexOf(userRole) !== -1;
    });
  }
}
