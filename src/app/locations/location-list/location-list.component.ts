import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  @Input() gridConfig: any;
  @Input() dataSource: any;
  @Output() sendSelectedRows: any = new EventEmitter<any>();
  selectedGridRows: any = [];

  gridConfigOptions: any = {
    title: 'Locations',
    columns: [
      {
        headerText: 'Type',
        columnName: 'type'
      },
      {
        headerText: 'coordinates',
        columnName: 'coordinates'
      },
      {
        headerText: 'Address',
        columnName: 'address'
      },
      {
        headerText: 'Description',
        columnName: 'description'
      }
    ],
    columnsStrArr: ['select', 'type', 'coordinates', 'address', 'description']
  };

  data: any = [];

  getSelectedGridRows(rows: any) {
    this.selectedGridRows = rows;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationsService: LocationService
  ) {}

  getLocations() {
    this.locationsService.getLocations().subscribe((response: any) => {
      let data = [];
      if (response.status === 'success' && response.data.locations) {
        for (let i of response.data.locations) {
          data.push({
            _id: i._id,
            type: i.location.type,
            coordinates: i.location.coordinates.join(','),
            address: i.location.address,
            description: i.location.description
          });
        }
        this.data = data;
        this.selectedGridRows = [];
      }
    });
  }

  addLocation() {
    this.router.navigate(['/locations/add']);
  }

  editLocation() {
    if (this.selectedGridRows.length === 1) {
      this.router.navigate(['/locations/' + this.selectedGridRows[0]._id]);
    } else {
      alert('Please select one row');
    }
  }

  deleteLocation() {
    if (this.selectedGridRows.length === 1) {
      this.locationsService
        .deleteLocation(this.selectedGridRows[0]._id)
        .subscribe((response: any) => {
          if (response.status === 'success' && response.data.location) {
            this.getLocations();
          }
        });
    } else {
      alert('Please select one row');
    }
  }

  ngOnInit() {
    this.getLocations();
  }
}
