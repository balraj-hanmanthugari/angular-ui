import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AllTourPackagesComponent } from "./all-tour-packages.component";
import { TourPackagesService } from "./../tour-packages.service";

describe("AllTourPackagesComponent", () => {
    let component: AllTourPackagesComponent;
    let fixture: ComponentFixture<AllTourPackagesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [AllTourPackagesComponent],
            providers: [TourPackagesService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllTourPackagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
