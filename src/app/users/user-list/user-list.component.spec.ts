import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "./../users.service";
import { UserListComponent } from "./user-list.component";

describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [UserListComponent],
      providers: [UsersService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
