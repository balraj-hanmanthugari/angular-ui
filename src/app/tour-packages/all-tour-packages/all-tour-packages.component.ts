import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TourPackagesService } from "./../tour-packages.service";
import { UserService } from "src/app/authentication/user.service";

@Component({
  selector: "app-all-tour-packages",
  templateUrl: "./all-tour-packages.component.html",
  styleUrls: ["./all-tour-packages.component.scss"],
})
export class AllTourPackagesComponent implements OnInit {
  tourPackages: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private tourPackagesService: TourPackagesService
  ) {}

  getTours() {
    this.tourPackagesService.getTours().subscribe((response: any) => {
      if (response.status === "success" && response.data.tours) {
        let data = [];
        for (let i of response.data.tours) {
          if (i.locations) {
            i.location = i.locations[0].location;
          }
          if (i.guides) {
            i.guides = i.guides[0].firstName + " " + i.guides[0].lastName;
          }
          data.push(i);
        }
        this.tourPackages = data;
      }
    });
  }

  bookTheTour(tour) {
    let user = this.userService.getUserSnapshot();
    let booking = {
      tour: tour._id,
      user: user._id,
      price: tour.price,
      paid: true,
    };
    this.tourPackagesService.bookTheTour(booking).subscribe((response: any) => {
      if (response.status === "success" && response.data.booking) {
        this.router.navigate(["home"]);
      }
    });
  }

  ngOnInit() {
    this.getTours();
  }
}
