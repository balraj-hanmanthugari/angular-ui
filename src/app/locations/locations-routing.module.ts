import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHeaderComponent } from '../shared/layout/user-header/user-header.component';
import { UserMenuComponent } from '../shared/layout/user-menu/user-menu.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationListComponent } from './location-list/location-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: LocationListComponent
  },
  {
    path: 'add',
    component: AddLocationComponent
  },
  {
    path: ':id',
    component: AddLocationComponent
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
export class LocationsRoutingModule {}
