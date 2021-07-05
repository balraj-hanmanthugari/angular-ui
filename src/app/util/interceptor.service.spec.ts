import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MaterialModule } from "./../material/material.module";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { InterceptorService } from "./interceptor.service";

describe("InterceptorService", () => {
    let service: InterceptorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule, HttpClientTestingModule],
            providers: [
                InterceptorService,
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
                InterceptorService,
            ],
        });
        service = TestBed.inject(InterceptorService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
