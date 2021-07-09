import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { LocationListComponent } from "./location-list.component";
import { LocationService } from "../location.service";

describe("LocationListComponent", () => {
  let component: LocationListComponent;
  let fixture: ComponentFixture<LocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LocationListComponent],
      providers: [LocationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
