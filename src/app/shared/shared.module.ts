import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { AngularPopupComponent } from './angular-popup/angular-popup.component';
import { AngularGridComponent } from './angular-grid/angular-grid.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppMenuComponent,
    AngularPopupComponent,
    AngularGridComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    AppHeaderComponent,
    AppMenuComponent,
    AngularPopupComponent,
    AngularGridComponent
  ],
  entryComponents: [AngularPopupComponent]
})
export class SharedModule {}
