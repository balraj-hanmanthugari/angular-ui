import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import {
    AuthUserState,
    authenticationReducer,
} from "./authentication/authentication.reducer";

export interface AppState {
    authUser: AuthUserState;
}

export const appReducer: ActionReducerMap<AppState> = {
    authUser: authenticationReducer,
};

export const getAuthenticationState =
    createFeatureSelector<AuthUserState>("authUser");
