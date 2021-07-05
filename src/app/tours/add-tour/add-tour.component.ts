import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { TourService } from "../tour.service";

@Component({
    selector: "app-add-tour",
    templateUrl: "./add-tour.component.html",
    styleUrls: ["./add-tour.component.scss"],
})
export class AddTourComponent implements OnInit {
    title = "Add Tour";
    isEditMode = false;
    locations: any = [];
    tourGuides: any = [];

    tourForm = this.fb.group({
        _id: [""],
        name: ["", Validators.required],
        duration: ["", Validators.required],
        maxGroupSize: ["", Validators.required],
        category: ["", Validators.required],
        price: ["", Validators.required],
        images: [""],
        startDates: [""],
        locations: ["", Validators.required],
        guides: ["", Validators.required],
    });

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private tourService: TourService
    ) {}

    addTour() {
        let tour = this.tourForm.value;
        delete tour._id;
        this.tourService.addTour(tour).subscribe((response: any) => {
            if (response.status === "success" && response.data.tour) {
                this.navigateToTourList();
            }
        });
    }

    editTour() {
        this.tourService
            .editTour(this.tourForm.value)
            .subscribe((response: any) => {
                if (response.status === "success" && response.data.tour) {
                    this.navigateToTourList();
                }
            });
    }

    getTour(id) {
        this.tourService.getTour(id).subscribe((response: any) => {
            if (response.status === "success" && response.data.tour) {
                this.setEditMode(response.data.tour);
            }
        });
    }

    setEditMode(tour) {
        this.tourForm.setValue({
            _id: tour._id,
            name: tour.name,
            duration: tour.duration,
            maxGroupSize: tour.maxGroupSize,
            category: tour.category,
            price: tour.price,
            images: tour.images,
            startDates: tour.startDates,
            locations: tour.locations,
            guides: tour.guides,
        });
        this.title = "Edit Tour";
        this.isEditMode = true;
    }

    navigateToTourList() {
        this.router.navigate(["/tours/list"]);
    }

    loadSelectBoxes() {
        this.tourService.loadSelectBoxes().subscribe((response: any) => {
            if (response instanceof Array) {
                let locations = [];
                this.tourGuides = response[0].data.user;
                for (let i of response[1].data.locations) {
                    locations.push({
                        _id: i._id,
                        type: i.location.type,
                        longitude: i.location.coordinates[0],
                        lattitude: i.location.coordinates[1],
                        address: i.location.address,
                        description: i.location.description,
                    });
                }
                this.locations = locations;
            }
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params["id"]) {
                this.getTour(params["id"]);
            }
        });

        this.loadSelectBoxes();
    }
}
