import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserHeaderComponent } from '../shared/layout/user-header/user-header.component';
import { UserMenuComponent } from '../shared/layout/user-menu/user-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: ':id',
    component: AddUserComponent
  },
  {
    path: '',
    outlet: 'header',
    component: UserHeaderComponent
  },
  {
    path: '',
    outlet: 'menu',
    component: UserMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
