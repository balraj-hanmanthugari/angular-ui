import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTourPackagesComponent } from './all-tour-packages/all-tour-packages.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'all',
  pathMatch: 'full'
}, {
  path: 'all',
  component: AllTourPackagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourPackagesRoutingModule { }
