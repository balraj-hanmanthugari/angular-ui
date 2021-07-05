import { TourPackagesModule } from "./tour-packages.module";

describe("TourPackagesModule", () => {
    let tourPackagesModule: TourPackagesModule;

    beforeEach(() => {
        tourPackagesModule = new TourPackagesModule();
    });

    it("should create an instance", () => {
        expect(tourPackagesModule).toBeTruthy();
    });
});
