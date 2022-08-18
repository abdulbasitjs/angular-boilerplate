import { Action } from '@ngrx/store';

// Check Authentication state
export const AUTH_START = '[AUTH] Authentication start';
export const AUTH_SUCCESS = '[AUTH] Authentication successful';
export const AUTH_FAIL = '[AUTH] Authentical fail';

export class AuthStart implements Action {
  readonly type = AUTH_START;
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(public payload: any) {}
}

export class AuthFail implements Action {
  readonly type = AUTH_FAIL;
  constructor(public payload: any) {}
}

//action types
export type AuthActions = AuthStart | AuthSuccess | AuthFail;
