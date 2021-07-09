import { Injectable } from "@angular/core";
import { AjaxService } from "./../util/ajax.service";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  currentMenu: any = [];

  constructor(private ajaxService: AjaxService) {}

  getAllMenu() {
    return this.ajaxService.ajaxJsonCall("./assets/data/menu-config.json");
  }

  getMenu(userRole) {
    let menus = JSON.parse(localStorage.getItem("menu"));
    if (!menus) {
      return;
    }
    console.log("menus: " + menus);
    return menus.filter((item) => {
      if (item.roles.indexOf(userRole) !== -1) {
        return true;
      }
      return false;
    });
  }

  getSubMenu(menuItem) {
    let menus = JSON.parse(localStorage.getItem("menu"));
    this.currentMenu = menus.filter((item) => {
      if (item.name == menuItem.name) {
        return item;
      }
    });
    return this.currentMenu[0].childMenus;
  }
}
