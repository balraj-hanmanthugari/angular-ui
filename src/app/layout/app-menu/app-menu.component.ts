import { Component, OnInit } from "@angular/core";
import { MenuService } from "./../menu.service";
import { UserService } from "../../authentication/user.service";

@Component({
    selector: "app-menu",
    templateUrl: "./app-menu.component.html",
    styleUrls: ["./app-menu.component.scss"],
})
export class AppMenuComponent implements OnInit {
    menu: any = [];
    subMenu: any = [];

    constructor(
        private menuService: MenuService,
        private userService: UserService
    ) {}

    isUserLoggedIn() {
        return this.userService.isUserAuthenticated();
    }

    prepareMenu() {
        this.userService.getUser().subscribe((user: any) => {
            this.menu = this.menuService.getMenu(user.role);
        });
    }

    getSubMenu(menuItem) {
        this.subMenu = this.menuService.getSubMenu(menuItem);
    }

    ngOnInit() {
        this.menuService.getAllMenu().subscribe((response: any) => {
            if (response.menu) {
                localStorage.setItem("menu", JSON.stringify(response.menu));
                this.prepareMenu();
            }
        });
    }
}
