import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../material/material.module";
import { SharedModule } from "./../shared/shared.module";

import { ToursRoutingModule } from "./tours-routing.module";
import { TourListComponent } from "./tour-list/tour-list.component";
import { AddTourComponent } from "./add-tour/add-tour.component";
import { TourService } from "./tour.service";
import { TourResolverService } from "./tour-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToursRoutingModule,
        MaterialModule,
        SharedModule,
    ],
    declarations: [TourListComponent, AddTourComponent],
    providers: [TourService, TourResolverService],
})
export class ToursModule {}
