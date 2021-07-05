import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddLocationComponent } from "./add-location/add-location.component";
import { LocationListComponent } from "./location-list/location-list.component";

const routes: Routes = [
    {
        path: "add",
        component: AddLocationComponent,
    },
    {
        path: "list",
        component: LocationListComponent,
    },
    {
        path: ":id",
        component: AddLocationComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LocationsRoutingModule {}
