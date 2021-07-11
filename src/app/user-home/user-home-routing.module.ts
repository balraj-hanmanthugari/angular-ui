import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHeaderComponent } from '../shared/layout/user-header/user-header.component';
import { UserMenuComponent } from '../shared/layout/user-menu/user-menu.component';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-home', pathMatch: 'full' },
  {
    path: 'user-home',
    component: UserHomeComponent
  },
  {
    path: '',
    outlet: 'app-header',
    component: UserHeaderComponent
  },
  {
    path: '',
    outlet: 'app-menu',
    component: UserMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule {}
