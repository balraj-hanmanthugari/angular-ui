import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-registration-preview",
    templateUrl: "./registration-preview.component.html",
    styleUrls: ["./registration-preview.component.scss"],
})
export class RegistrationPreviewComponent implements OnInit {
    registrationDetails: any = {
        firstName: "",
        lastName: "",
        emailId: "",
    };

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    registerUser() {
        this.authenticationService.registerUser().subscribe((response: any) => {
            if (response.status === "success" && response.data.user) {
                this.router.navigate(["/authenticate/login"]);
            }
        });
    }

    ngOnInit(): void {
        this.registrationDetails =
            this.authenticationService.getRegistrationDetails();
        if (!this.registrationDetails.firstName) {
            this.router.navigate(["/authenticate/registration"]);
        }
    }
}
