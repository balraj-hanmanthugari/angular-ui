import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../shared/layout/app-header/app-header.component';
import { AppMenuComponent } from '../shared/layout/app-menu/app-menu.component';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  },
  {
    path: '',
    outlet: 'app-header',
    component: AppHeaderComponent
  },
  {
    path: '',
    outlet: 'app-menu',
    component: AppMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule {}
