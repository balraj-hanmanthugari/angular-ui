import { Injectable } from "@angular/core";
import { AjaxService } from "../util/ajax.service";

@Injectable()
export class LocationService {
    constructor(private ajaxService: AjaxService) {}

    getLocations() {
        return this.ajaxService.ajaxGetCall("locations");
    }

    getLocation(id) {
        return this.ajaxService.ajaxGetCall("locations/" + id);
    }

    addLocation(location) {
        return this.ajaxService.ajaxPostCall("locations", location);
    }

    editLocation(location) {
        return this.ajaxService.ajaxPatchCall(
            "locations/" + location._id,
            location
        );
    }

    deleteLocation(id) {
        return this.ajaxService.ajaxDeleteCall("locations/" + id);
    }
}
