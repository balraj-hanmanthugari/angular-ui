import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { AddLocationComponent } from "./add-location.component";
import { LocationService } from "../location.service";

describe("AddLocationComponent", () => {
    let component: AddLocationComponent;
    let fixture: ComponentFixture<AddLocationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
            ],
            declarations: [AddLocationComponent],
            providers: [LocationService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddLocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
