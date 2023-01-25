import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { CoreState } from '../state/auth.state';

const initialState: CoreState = {
  token: null,
  me: null,
  isLoading: false,
  error: undefined,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.setToken, (state, { token }) => ({
    ...state,
    token,
  })),
  on(AuthActions.getMe, (state) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),
  on(AuthActions.getMeSuccess, (state, { data }) => ({
    ...state,
    me: data,
    isLoading: false,
    error: undefined,
  })),
  on(AuthActions.getMeError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function AuthReducer(state: CoreState | undefined, action: Action) {
  return authReducer(state, action);
}
