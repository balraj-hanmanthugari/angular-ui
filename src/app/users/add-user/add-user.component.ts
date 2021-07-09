import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../users.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
  providers: [],
})
export class AddUserComponent implements OnInit {
  title = "Add User";
  isEditMode = false;

  userForm = this.fb.group({
    _id: [""],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    emailId: ["", Validators.required],
    password: ["", Validators.required],
    role: ["", Validators.required],
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  addUser() {
    let user = this.userForm.value;
    delete user._id;
    this.usersService.addUser(user).subscribe((response: any) => {
      if (response.status === "success" && response.data.user) {
        this.navigateToUserList();
      }
    });
  }

  editUser() {
    this.usersService
      .editUser(this.userForm.value)
      .subscribe((response: any) => {
        if (response.status === "success" && response.data.user) {
          this.navigateToUserList();
        }
      });
  }

  getUser(id) {
    this.usersService.getUser(id).subscribe((response: any) => {
      if (response.status === "success" && response.data.user) {
        this.setEditMode(response.data.user);
      }
    });
  }

  setEditMode(user) {
    this.userForm.setValue(user);
    this.title = "Edit User";
    this.isEditMode = true;
  }

  navigateToUserList() {
    this.router.navigate(["/users/list"]);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
      }
    });
  }
}
