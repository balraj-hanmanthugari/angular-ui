import { Injectable } from '@angular/core';
import { AjaxService } from '../util/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {
  constructor(private ajaxService: AjaxService) {}

  getBookedTours(userId) {
    return this.ajaxService.ajaxGetCall('users/' + userId + '/bookings');
  }

  cancelTheTour(userId, bookingId) {
    return this.ajaxService.ajaxDeleteCall(
      'users/' + userId + '/bookings/' + bookingId
    );
  }

  createTheTourRating(review) {
    return this.ajaxService.ajaxPostCall('tours/reviews', review);
  }

  updateTheTourRating(review) {
    return this.ajaxService.ajaxPatchCall(
      'tours/reviews/' + review._id,
      review
    );
  }
}
