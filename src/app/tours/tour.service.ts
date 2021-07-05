import { Injectable } from "@angular/core";
import { AjaxService } from "./../util/ajax.service";

@Injectable()
export class TourService {
    constructor(private ajaxService: AjaxService) {}

    getTours() {
        return this.ajaxService.ajaxGetCall("tours");
    }

    getTour(id) {
        return this.ajaxService.ajaxGetCall("tours/" + id);
    }

    addTour(tour) {
        return this.ajaxService.ajaxPostCall("tours", tour);
    }

    editTour(tour) {
        return this.ajaxService.ajaxPatchCall("tours/" + tour._id, tour);
    }

    deleteTour(id) {
        return this.ajaxService.ajaxDeleteCall("tours/" + id);
    }

    loadSelectBoxes() {
        return this.ajaxService.ajaxGetMultipleCall([
            "users/guide",
            "locations",
        ]);
    }
}
