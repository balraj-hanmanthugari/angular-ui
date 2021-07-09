import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { AuthenticationGuard } from "./authentication.guard";

describe("AuthGuard", () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthenticationGuard],
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
