import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { LocationsRoutingModule } from './locations-routing.module';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationListComponent } from './location-list/location-list.component';
import { SharedModule } from './../shared/shared.module';
import { LocationService } from './location.service';

@NgModule({
  declarations: [AddLocationComponent, LocationListComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [LocationService]
})
export class LocationsModule {}
