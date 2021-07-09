import { ToursModule } from "./tours.module";

describe("ToursModule", () => {
  let toursModule: ToursModule;

  beforeEach(() => {
    toursModule = new ToursModule();
  });

  it("should create an instance", () => {
    expect(toursModule).toBeTruthy();
  });
});
