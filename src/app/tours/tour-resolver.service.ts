import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { TourService } from "./tour.service";

@Injectable()
export class TourResolverService implements Resolve<any> {
    constructor(private tourService: TourService) {}

    resolve() {
        return this.tourService.getTours();
    }
}
