import { createAction, props } from '@ngrx/store';
import { MeResponse } from '../../interfaces/me.interface';

export const setToken = createAction(
  '[Core module] set token',
  props<{ token: string }>()
);

export const getMe = createAction('[Core module] get me');

export const getMeSuccess = createAction(
  '[Core module] get me success',
  props<{ data: MeResponse }>()
);

export const getMeError = createAction(
  '[Core module] get me error',
  props<{ error: string }>()
);
