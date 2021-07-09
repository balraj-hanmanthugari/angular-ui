import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AngularPopupComponent } from "./angular-popup.component";
import { AppModule } from "src/app/app.module";

describe("AngularPopupComponent", () => {
  let matDialogRef: MatDialogRef<AngularPopupComponent>;
  let component: AngularPopupComponent;
  let fixture: ComponentFixture<AngularPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
