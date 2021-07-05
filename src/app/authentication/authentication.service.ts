import { Injectable } from "@angular/core";
import { AjaxService } from "../util/ajax.service";

@Injectable()
export class AuthenticationService {
    registrationDetails = {};

    constructor(private ajaxService: AjaxService) {}

    setRegistrationDetails(registerData) {
        this.registrationDetails = registerData;
    }

    getRegistrationDetails() {
        return this.registrationDetails;
    }

    checkEmailId(emailId) {
        return this.ajaxService.ajaxPostCall("regLogin/checkEmailId", {
            emailId: emailId,
        });
    }

    registerUser() {
        return this.ajaxService.ajaxPostCall(
            "regLogin/register",
            this.registrationDetails
        );
    }
}
