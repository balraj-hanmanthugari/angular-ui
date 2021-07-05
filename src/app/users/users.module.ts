import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "./../shared/shared.module";
import { MaterialModule } from "./../material/material.module";
import { UserListComponent } from "./user-list/user-list.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { UsersService } from "./users.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        MaterialModule,
        SharedModule,
    ],
    declarations: [UserListComponent, AddUserComponent],
    providers: [UsersService],
})
export class UsersModule {}
