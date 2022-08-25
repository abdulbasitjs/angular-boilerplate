import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export interface AppState {
  login: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  login: fromAuth.reducer,
};


export const getAppState = createFeatureSelector<AppState>('auth');
export const getLoginState = createSelector(getAppState, (state: AppState) => state.login);
export const getCurrentUser = createSelector(getLoginState, fromAuth.getCurrentUser);
export const getUserLoading = createSelector(getLoginState, fromAuth.getUserLoading);
export const getUserLoaded = createSelector(getLoginState, fromAuth.getUserLoaded);
