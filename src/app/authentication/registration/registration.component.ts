import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { AuthenticationService } from "../authentication.service";
import { AngularPopupComponent } from "../../shared/angular-popup/angular-popup.component";

@Component({
    selector: "app-registration",
    templateUrl: "./registration.component.html",
    styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
    registrationDetails: any = {
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
        confirmPassword: "",
    };
    isEmailExists = false;

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    preparePreview() {
        if (this.isEmailExists) {
            this.dialog.open(AngularPopupComponent, {
                width: "400px",
                data: { name: "alert", message: "Email Id already exists" },
            });
        } else {
            this.authenticationService.setRegistrationDetails(
                this.registrationDetails
            );
            this.router.navigate(["authenticate/registration-preview"]);
        }
    }

    checkEmailId(emailId) {
        if (!emailId.errors) {
            this.authenticationService
                .checkEmailId(this.registrationDetails.emailId)
                .subscribe((response: any) => {
                    if (response.status === "success") {
                        this.isEmailExists = response.data.isEmailExists;
                    } else {
                        this.isEmailExists = false;
                    }
                });
        }
    }

    ngOnInit(): void {}
}
