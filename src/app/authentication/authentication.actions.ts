import { Action } from "@ngrx/store";

export enum authenticationActionTypes {
  Login = "[authentication] Login",
  CheckEmailId = "[authentication] CheckEmailId",
  Register = "[authentication] Register",
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class AuthenticationLogin extends ActionEx {
  readonly type = "Authentication Login";
  constructor(public payload: any) {
    super();
  }
}

export class AuthenticationCheckEmailId extends ActionEx {
  readonly type = "Authentication CheckEmailId";
  constructor(public payload: any) {
    super();
  }
}

export class AuthenticationRegister extends ActionEx {
  readonly type = "Authentication Register";
  constructor(public payload: any) {
    super();
  }
}
