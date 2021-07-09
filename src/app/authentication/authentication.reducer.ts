import { ActionEx, authenticationActionTypes } from "./authentication.actions";

export interface AuthUserState {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
}

const initialUser: any = {
  firstName: "",
  lastName: "",
  emailId: "",
  password: "",
};

export const authenticationReducer = (user = initialUser, action: ActionEx) => {
  switch (action.type) {
    case authenticationActionTypes.Login:
      return [...user, ...action.payload];

    case authenticationActionTypes.CheckEmailId:
      return [...user, action.payload];

    case authenticationActionTypes.Register:
      return [...user, action.payload];

    default:
      return user;
  }
};
