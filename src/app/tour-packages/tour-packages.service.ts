import { Injectable } from "@angular/core";
import { AjaxService } from "../util/ajax.service";

@Injectable()
export class TourPackagesService {
    constructor(private ajaxService: AjaxService) {}

    getTours() {
        return this.ajaxService.ajaxGetCall("tour-packages");
    }

    getTour(id) {
        return this.ajaxService.ajaxGetCall("tour-packages/" + id);
    }

    bookTheTour(booking) {
        return this.ajaxService.ajaxPostCall("tour-packages/bookings", booking);
    }
}
