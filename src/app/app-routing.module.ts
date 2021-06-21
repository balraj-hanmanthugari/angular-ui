import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'tour-packages',
    loadChildren: () =>
      import('./tour-packages/tour-packages.module').then(
        m => m.TourPackagesModule
      ),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then(m => m.LocationsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {}
);
