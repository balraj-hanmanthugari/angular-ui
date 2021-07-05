import { TestBed } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController,
} from "@angular/common/http/testing";
import { AuthenticationService } from "./authentication.service";

describe("RegistrationService", () => {
    let service: AuthenticationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [],
        });
        service = TestBed.inject(AuthenticationService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
