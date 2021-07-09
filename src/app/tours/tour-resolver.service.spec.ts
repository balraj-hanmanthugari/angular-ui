import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { TourResolverService } from "./tour-resolver.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Resolve } from "@angular/router";
import { TourService } from "./tour.service";

describe("TourResolverService", () => {
  let service: TourResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [TourService, TourResolverService],
    });
    service = TestBed.inject(TourResolverService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
