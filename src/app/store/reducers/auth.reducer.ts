import * as fromAuth from '../actions/auth.action';

export interface AuthState {
  data: Array<any>;
  loaded: boolean;
  loading: boolean;
}

export const initialState: AuthState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.AUTH_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromAuth.AUTH_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromAuth.AUTH_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}
