import { Component, OnInit } from '@angular/core';
import { UserHomeService } from './user-home.service';
import { UserService } from '../util/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  user: any;
  bookedTours: any = [];

  constructor(
    private homeService: UserHomeService,
    private userService: UserService
  ) {}

  getBookedTours() {
    this.homeService
      .getBookedTours(this.user._id)
      .subscribe((response: any) => {
        if (response.status === 'success' && response.data.bookings) {
          this.bookedTours = response.data.bookings;
        }
      });
  }

  cancelTheTour(booking) {
    this.homeService
      .cancelTheTour(this.user._id, booking.bookings[0]._id)
      .subscribe((response: any) => {
        if (response.status === 'success' && response.data.booking) {
          this.getBookedTours();
        }
      });
  }

  rateTheTour(tour) {
    let rating: any = {
      tour: tour._id,
      user: this.user._id
    };

    if (tour.reviews[0]) {
      rating._id = tour.reviews[0]._id;
      rating.review = tour.reviews[0].review;
      rating.rating = tour.reviews[0].rating;
      this.homeService
        .updateTheTourRating(rating)
        .subscribe((response: any) => {
          if (response.status === 'success' && response.data.review) {
            this.getBookedTours();
          }
        });
    } else {
      rating.review = tour.review;
      rating.rating = tour.rating;
      this.homeService
        .createTheTourRating(rating)
        .subscribe((response: any) => {
          if (response.status === 'success' && response.data.review) {
            this.getBookedTours();
          }
        });
    }
  }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      this.getBookedTours();
    });
  }
}
