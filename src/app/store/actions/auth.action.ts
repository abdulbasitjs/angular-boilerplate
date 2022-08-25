import { Action } from '@ngrx/store';
import { User } from 'src/app/modules/auth/models/user.mode';

// Check Authentication state
export const AUTH_START = '[AUTH] Authentication start';
export const AUTH_SUCCESS = '[AUTH] Authentication successful';
export const AUTH_FAIL = '[AUTH] Authentication fail';
export const USER_UPDATE = '[AUTH] Load/Update user';

export class AuthStart implements Action {
  readonly type = AUTH_START;
}
export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(public payload: User) {}
}

export class AuthFail implements Action {
  readonly type = AUTH_FAIL;
  constructor(public payload: any) {}
}

export class LoadUser implements Action {
  readonly type = USER_UPDATE;
  constructor(public payload: any) {}
}

//action types
export type AuthActions = AuthStart | AuthSuccess | AuthFail;
