import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { LocationService } from "./location.service";
import { AjaxService } from "../util/ajax.service";

describe("LocationService", () => {
    let http: HttpClient;
    let service: LocationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LocationService],
        });
        service = TestBed.inject(LocationService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
