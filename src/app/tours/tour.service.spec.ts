import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { TourService } from "./tour.service";

describe("TourService", () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TourService],
        })
    );

    it("should be created", () => {
        const service: TourService = TestBed.get(TourService);
        expect(service).toBeTruthy();
    });
});
