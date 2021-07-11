import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: 'authenticate',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      )
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./user-home/user-home.module').then(m => m.UserHomeModule),
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
    path: '',
    redirectTo: 'authenticate',
    pathMatch: 'full'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes,
  { useHash: true }
);
