import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { UserService } from 'src/app/authentication/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookedTours: any = [];

  constructor(
    private homeService: HomeService,
    private userService: UserService
  ) {}

  getBookedTours() {
    let user = this.userService.getUserSnapshot();
    if (!user || !user._id) {
      return false;
    }
    this.homeService.getBookedTours(user._id).subscribe((response: any) => {
      if (response.status === 'success' && response.data.bookings) {
        this.bookedTours = response.data.bookings;
      }
    });
  }

  cancelTheTour(booking) {
    let user = this.userService.getUserSnapshot();
    this.homeService
      .cancelTheTour(user._id, booking.bookings[0]._id)
      .subscribe((response: any) => {
        if (response.status === 'success' && response.data.booking) {
          this.getBookedTours();
        }
      });
  }

  rateTheTour(tour) {
    let user = this.userService.getUserSnapshot();

    let rating: any = {
      tour: tour._id,
      user: user._id
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
    this.getBookedTours();
  }
}
