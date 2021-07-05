import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AddTourComponent } from "./add-tour.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { TourService } from "../tour.service";

describe("AddTourComponent", () => {
    let component: AddTourComponent;
    let fixture: ComponentFixture<AddTourComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
            ],
            declarations: [AddTourComponent],
            providers: [TourService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddTourComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
