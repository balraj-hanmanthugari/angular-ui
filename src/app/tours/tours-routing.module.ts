import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TourListComponent } from "./tour-list/tour-list.component";
import { AddTourComponent } from "./add-tour/add-tour.component";
import { TourResolverService } from "./tour-resolver.service";

const routes: Routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    {
        path: "list",
        component: TourListComponent,
        resolve: {
            tourData: TourResolverService,
        },
    },
    {
        path: "add",
        component: AddTourComponent,
    },
    {
        path: ":id",
        component: AddTourComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ToursRoutingModule {}
