import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTourPackagesComponent } from './all-tour-packages/all-tour-packages.component';
import { UserHeaderComponent } from '../shared/layout/user-header/user-header.component';
import { UserMenuComponent } from '../shared/layout/user-menu/user-menu.component';

const routes: Routes = [
  {
    path: '',
    component: AllTourPackagesComponent
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
export class TourPackagesRoutingModule {}
