import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
  '[Login module] make login',
  props<{ user: string; password: string }>()
);

export const loginUserSuccess = createAction(
  '[Login module] make login success'
);

export const loginUserError = createAction(
  '[Login module] make login error',
  props<{ error: string }>()
);
