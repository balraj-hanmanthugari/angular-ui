import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  title: string;
  name: string;
  message: string;
  buttons: any;
}

@Component({
  selector: "app-angular-popup",
  templateUrl: "./angular-popup.component.html",
  styleUrls: ["./angular-popup.component.scss"],
})
export class AngularPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AngularPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onButtonClick(buttonItem): void {
    if (buttonItem.name === "Ok") {
      this.dialogRef.close();
    }
  }

  addOkButton() {
    this.data.buttons = [
      {
        name: "Ok",
      },
    ];
  }

  ngOnInit(): void {
    if (this.data.name === "spinner") {
      this.data.title = "Loading";
    } else if (this.data.name === "alert") {
      this.data.title = "Alert";
      this.addOkButton();
    } else if (this.data.name === "warning") {
      this.data.title = "Warning";
      this.addOkButton();
    } else if (this.data.name === "info") {
      this.data.title = "Info";
      this.addOkButton();
    } else if (this.data.name === "success") {
      this.data.title = "Success";
      this.addOkButton();
    } else if (this.data.name === "error") {
      this.data.title = "Error";
      this.addOkButton();
    }
  }
}
