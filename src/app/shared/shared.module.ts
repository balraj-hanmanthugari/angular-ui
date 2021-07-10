import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { AngularPopupComponent } from './angular-popup/angular-popup.component';
import { AngularGridComponent } from './angular-grid/angular-grid.component';

@NgModule({
  declarations: [AngularPopupComponent, AngularGridComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AngularPopupComponent, AngularGridComponent],
  entryComponents: [AngularPopupComponent]
})
export class SharedModule {}
