import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../material/material.module";
import { TourPackagesRoutingModule } from "./tour-packages-routing.module";
import { AllTourPackagesComponent } from "./all-tour-packages/all-tour-packages.component";
import { TourPackagesService } from "./../tour-packages/tour-packages.service";

@NgModule({
    declarations: [AllTourPackagesComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TourPackagesRoutingModule,
        MaterialModule,
    ],
    providers: [TourPackagesService],
})
export class TourPackagesModule {}
