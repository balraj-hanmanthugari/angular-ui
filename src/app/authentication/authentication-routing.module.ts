import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RegistrationPreviewComponent } from "./registration-preview/registration-preview.component";

const routes: Routes = [
  { path: "", redirectTo: "l", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "registration",
    component: RegistrationComponent,
  },
  {
    path: "registration-preview",
    component: RegistrationPreviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
