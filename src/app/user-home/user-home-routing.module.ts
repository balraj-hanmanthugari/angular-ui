import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../layout/app-header/app-header.component';
import { AppMenuComponent } from '../layout/app-menu/app-menu.component';
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
