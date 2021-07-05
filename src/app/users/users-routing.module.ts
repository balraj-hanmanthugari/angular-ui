import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { AddUserComponent } from "./add-user/add-user.component";

const routes: Routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    {
        path: "list",
        component: UserListComponent,
    },
    {
        path: "add",
        component: AddUserComponent,
    },
    {
        path: ":id",
        component: AddUserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
