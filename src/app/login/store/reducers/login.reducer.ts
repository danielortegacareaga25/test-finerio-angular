import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';
import { LoginState } from '../state/login.state';

const initialState: LoginState = {
  loading: false,
  error: undefined,
};

const loginReducer = createReducer(
  initialState,
  on(LoginActions.loginUser, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),
  on(LoginActions.loginUserSuccess, (state) => ({
    ...state,
    loading: false,
    error: undefined,
  })),
  on(LoginActions.loginUserError, (state, error) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
