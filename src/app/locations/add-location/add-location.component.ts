import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  title = 'Add Tour';
  isEditMode = false;

  locationForm = this.fb.group({
    _id: [''],
    type: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required],
    address: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private locationService: LocationService
  ) {}

  addLocation() {
    let location = {
      location: this.locationForm.value
    };

    location.location.coordinates = [
      location.location.latitude,
      location.location.longitude
    ];
    delete location.location._id;
    delete location.location.latitude;
    delete location.location.longitude;

    this.locationService.addLocation(location).subscribe((response: any) => {
      if (response.status === 'success' && response.data.location) {
        this.navigateToTourList();
      }
    });
  }

  editLocation() {
    let location = {
      _id: this.locationForm.value._id,
      location: this.locationForm.value
    };

    location.location.coordinates = [
      location.location.latitude,
      location.location.longitude
    ];
    delete location.location.latitude;
    delete location.location.longitude;

    this.locationService.editLocation(location).subscribe((response: any) => {
      if (response.status === 'success' && response.data.location) {
        this.navigateToTourList();
      }
    });
  }

  getLocation(id) {
    this.locationService.getLocation(id).subscribe((response: any) => {
      if (response.status === 'success' && response.data.location) {
        this.setEditMode(response.data.location);
      }
    });
  }

  setEditMode(location) {
    this.locationForm.setValue({
      _id: location._id,
      type: location.location.type,
      latitude: location.location.coordinates[0],
      longitude: location.location.coordinates[1],
      address: location.location.address,
      description: location.location.description
    });
    this.title = 'Edit Tour';
    this.isEditMode = true;
  }

  navigateToTourList() {
    this.router.navigate(['/locations/list']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getLocation(params['id']);
      }
    });
  }
}
