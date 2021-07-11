import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourListComponent } from './tour-list/tour-list.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourResolverService } from './tour-resolver.service';
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
    component: TourListComponent,
    resolve: {
      tourData: TourResolverService
    }
  },
  {
    path: 'add',
    component: AddTourComponent
  },
  {
    path: ':id',
    component: AddTourComponent
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
export class ToursRoutingModule {}
