import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./../material/material.module";
import { SharedModule } from "../shared/shared.module";

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RegistrationPreviewComponent } from "./registration-preview/registration-preview.component";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationService } from "./authentication.service";

import { StoreModule } from "@ngrx/store";
import { authenticationReducer } from "./authentication.reducer";

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        RegistrationPreviewComponent,
    ],
    imports: [
        FormsModule,
        MaterialModule,
        CommonModule,
        StoreModule.forRoot({ reducer: authenticationReducer }),
        SharedModule,
        AuthenticationRoutingModule,
    ],
    providers: [AuthenticationService],
})
export class AuthenticationModule {}
