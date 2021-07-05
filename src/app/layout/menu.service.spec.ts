import { TestBed } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController,
} from "@angular/common/http/testing";
import { MenuService } from "./menu.service";

describe("MenuService", () => {
    let httpMock: HttpTestingController;
    let service: MenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpTestingController],
        });
        httpMock = TestBed.get(HttpTestingController);
        console.log(httpMock);
        service = TestBed.get(MenuService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should get all the menus", () => {
        localStorage.setItem(
            "menu",
            JSON.stringify([
                {
                    name: "Home",
                    path: "/home",
                    roles: ["admin", "guide", "user"],
                    childMenus: [
                        {
                            name: "home",
                            path: "/home",
                        },
                    ],
                },
            ])
        );
        service.getAllMenu().subscribe((response: any) => {
            expect(response).toBeTruthy();
            localStorage.setItem("menu", response.menu);
        });
        /*const req = httpMock.expectOne('/assets/data/menu-config.json');
    expect(req.request.method).toBe('GET');
    req.flush({
      'menu': [{
          'name': 'Home', 
          'path': '/home', 
          'roles': ['admin', 'guide', 'user'],
          'childMenus': [{
            'name': 'home', 
            'path': '/home'
          }]
      }]
    });*/
    });

    it("should get the menus by user role", () => {
        let menus = service.getMenu("user");
        console.log("user menus");
        expect(menus).toBeDefined();
    });

    it("should get the sub menus by menu item", () => {
        let menuItem = {
            name: "Home",
        };
        let subMenu = service.getSubMenu(menuItem);
        console.log("user sub menus");
        expect(subMenu).toBeDefined();
    });
});
