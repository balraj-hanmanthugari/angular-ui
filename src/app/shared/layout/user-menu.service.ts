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
      roles: ['admin', 'guide', 'user'],
      childMenus: [
        {
          name: 'home',
          path: '/home'
        }
      ]
    },
    {
      name: 'Tour Packages',
      path: '/tour-packages',
      roles: ['admin', 'guide', 'user'],
      childMenus: [
        {
          name: 'All Tour Packages',
          path: '/tour-packages/all'
        }
      ]
    },
    {
      name: 'Users',
      path: '/users',
      roles: ['admin'],
      childMenus: [
        {
          name: 'User Creation',
          path: '/users/add'
        },
        {
          name: 'User List',
          path: '/users/list'
        }
      ]
    },
    {
      name: 'Tours',
      path: '/tours',
      roles: ['admin'],
      childMenus: [
        {
          name: 'Tour Creation',
          path: '/tours/add'
        },
        {
          name: 'Tour List',
          path: '/tours/list'
        }
      ]
    },
    {
      name: 'Locations',
      path: '/locations',
      roles: ['admin'],
      childMenus: [
        {
          name: 'Location Creation',
          path: '/locations/add'
        },
        {
          name: 'Location List',
          path: '/locations/list'
        }
      ]
    }
  ];
  currentMenu: any;

  constructor(private ajaxService: AjaxService) {}

  getMenuItem(userRole) {
    return this.menu.find(item => {
      return item.roles.indexOf(userRole) !== -1;
    });
  }

  getSubMenu(menuItem) {
    this.currentMenu = this.menu.find(item => {
      return item.name == menuItem.name;
    });
    return this.currentMenu.childMenus;
  }
}
