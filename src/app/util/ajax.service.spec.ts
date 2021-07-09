import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { AjaxService } from "./ajax.service";

describe("AjaxService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let ajaxService: AjaxService;
  let mockResponse = [
    {
      name: "user1",
    },
    {
      name: "user2",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AjaxService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    ajaxService = TestBed.inject(AjaxService);
  });

  it("should be created", fakeAsync(() => {
    expect(ajaxService).toBeTruthy();

    ajaxService.ajaxGetCall("users").subscribe((data) => {
      console.log(data);
    });
    tick();
    let req = httpTestingController.expectOne("http://localhost:3000/users");
    expect(req.request.method).toEqual("GET");
    req.flush(mockResponse);
    httpTestingController.verify();
  }));
});
