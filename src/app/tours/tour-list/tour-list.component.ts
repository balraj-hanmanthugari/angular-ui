import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from './../tour.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss'],
  providers: []
})
export class TourListComponent implements OnInit {

  @Input() gridConfig: any;
  @Input() dataSource: any;
  @Output() sendSelectedRows: any = new EventEmitter<any>();
  selectedGridRows: any = [];

  gridConfigOptions: any = {
    title: 'Tours',
    columns: [{
      headerText: 'Name',
      columnName: 'name'
    }, {
      headerText: 'Duration',
      columnName: 'duration'
    }, {
      headerText: 'Group Size',
      columnName: 'maxGroupSize'
    }, {
      headerText: 'Category',
      columnName: 'category'
    }, {
      headerText: 'Price',
      columnName: 'price'
    }, {
      headerText: 'Location',
      columnName: 'location'
    }, {
      headerText: 'Tour Guide',
      columnName: 'guides'
    }],
    columnsStrArr: ['select', 'name', 'duration', 'maxGroupSize', 'category', 'price', 'location', 'guides']
  };

  data: any = [];

  getSelectedGridRows(rows: any) {
    this.selectedGridRows = rows;
  }

  constructor(private router: Router, private route: ActivatedRoute, private tourService: TourService) { }

  getTours() {
    this.tourService.getTours().subscribe((response: any) => {
      if (response.status === 'success' && response.data.tours) {
        let data = [];
        for (let i of response.data.tours) {
          if (i.location) {
            i.location = i.locations[0].location;
          }
          if (i.guides) {
            i.guides = i.guides[0].firstName + ' ' + i.guides[0].lastName;
          }
          data.push(i);
        }
        this.data = data;
        this.selectedGridRows = [];
      }
    });
  }

  addTour() {
    this.router.navigate(['/tours/add']);
  }

  editTour() {
    if (this.selectedGridRows.length === 1) {
      this.router.navigate(['/tours/' + this.selectedGridRows[0]._id]);
    } else {
      alert('Please select one row');
    }
  }

  deleteTour() {
    if (this.selectedGridRows.length === 1) {
      this.tourService.deleteTour(this.selectedGridRows[0]._id).subscribe((response: any) => {
        if (response.status === 'success' && response.data.tour) {
          this.getTours();
        }
      });
    } else {
      alert('Please select one row');
    }
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
      if (response.tourData && response.tourData.status === 'success') {
        let data = [];
        for (let i of response.tourData.data.tours) {
          if (i.locations && i.locations[0]) {
            i.location = i.locations[0].location.address;
          }
          if (i.guides) {
            i.guides = i.guides[0].firstName + ' ' + i.guides[0].lastName;
          }
          data.push(i);
        }
        this.data = data;
      }
    });
  }

}
