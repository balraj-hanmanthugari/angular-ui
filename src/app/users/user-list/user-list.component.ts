import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "./../users.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
  providers: [],
})
export class UserListComponent implements OnInit {
  @Input() gridConfig: any;
  @Input() dataSource: any;
  @Output() sendSelectedRows: any = new EventEmitter<any>();

  gridConfigOptions: any = {
    title: "Users",
    columns: [
      {
        headerText: "First Name",
        columnName: "firstName",
      },
      {
        headerText: "Last Name",
        columnName: "lastName",
      },
      {
        headerText: "Email Id",
        columnName: "emailId",
      },
      {
        headerText: "Role",
        columnName: "role",
      },
    ],
    columnsStrArr: ["select", "firstName", "lastName", "emailId", "role"],
  };

  data: any = [];
  selectedGridRows: any = [];

  getSelectedGridRows(rows: any) {
    this.selectedGridRows = rows;
  }

  constructor(private router: Router, private usersService: UsersService) {}

  getUsers() {
    this.usersService.getUsers().subscribe((response: any) => {
      if (response.status === "success" && response.data.users) {
        this.data = response.data.users;
      }
    });
  }

  viewUser(user) {
    console.log("code for popup view", user);
  }

  addUser() {
    this.router.navigate(["/users/add"]);
  }

  editUser() {
    this.router.navigate(["/users/" + this.selectedGridRows[0].emailId]);
  }

  deleteUser() {
    if (this.selectedGridRows.length === 1) {
      this.usersService
        .deleteUser(this.selectedGridRows[0]._id)
        .subscribe((response: any) => {
          if (response.status === "success" && response.data.user) {
            this.getUsers();
          }
        });
    } else {
      alert("Please select one row");
    }
  }

  ngOnInit() {
    this.getUsers();
  }
}
