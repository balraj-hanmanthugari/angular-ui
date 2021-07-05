import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "./../../app.module";
import { AppMenuComponent } from "./app-menu.component";

describe("AppMenuComponent", () => {
    let component: AppMenuComponent;
    let fixture: ComponentFixture<AppMenuComponent>;
    let domElement: any;
    let nativeElement: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            declarations: [],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppMenuComponent);
        component = fixture.componentInstance;
        domElement = fixture.debugElement;
        nativeElement = fixture.nativeElement;
        fixture.detectChanges();
    });

    it("should create", () => {
        console.log(fixture);
        expect(fixture).toBeTruthy();
        console.log(component);
        expect(component).toBeTruthy();
        console.log(domElement);
        expect(domElement).toBeTruthy();
        console.log(nativeElement);
        expect(nativeElement).toBeTruthy();
    });
});
