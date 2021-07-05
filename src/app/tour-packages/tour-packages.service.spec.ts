import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { AjaxService } from "../util/ajax.service";
import { TourPackagesService } from "./tour-packages.service";

describe("TourPackagesService", () => {
    let service: TourPackagesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TourPackagesService],
        });
        service = TestBed.inject(TourPackagesService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
