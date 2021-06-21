import { Injectable } from '@angular/core';
import { AjaxService } from './../util/ajax.service';

@Injectable()
export class UsersService {

  users = [];

  constructor(private ajaxService: AjaxService) { }

  getUsers() {
    return this.ajaxService.ajaxGetCall('users');
  }

  getUser(id) {
    return this.ajaxService.ajaxGetCall('users/' + id);
  }

  addUser(user) {
    return this.ajaxService.ajaxPostCall('users', user);
  }

  editUser(user) {
    return this.ajaxService.ajaxPatchCall('users/' + user.emailId, user);
  }

  deleteUser(id) {
    return this.ajaxService.ajaxDeleteCall('users/' + id);
  }

}
