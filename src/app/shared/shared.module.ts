import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { AngularPopupComponent } from './angular-popup/angular-popup.component';
import { AngularGridComponent } from './angular-grid/angular-grid.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { UserMenuComponent } from './layout/user-menu/user-menu.component';
import { UserHeaderComponent } from './layout/user-header/user-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppHeaderComponent,
    UserHeaderComponent,
    UserMenuComponent,
    AngularPopupComponent,
    AngularGridComponent,
    UserHeaderComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    AppHeaderComponent,
    UserHeaderComponent,
    UserMenuComponent,
    AngularPopupComponent,
    AngularGridComponent
  ],
  entryComponents: [AngularPopupComponent]
})
export class SharedModule {}
