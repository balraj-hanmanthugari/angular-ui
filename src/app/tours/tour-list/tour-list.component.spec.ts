import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { TourService } from "../tour.service";
import { TourListComponent } from "./tour-list.component";

describe("TourListComponent", () => {
    let component: TourListComponent;
    let fixture: ComponentFixture<TourListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
            ],
            declarations: [TourListComponent],
            providers: [TourService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TourListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
