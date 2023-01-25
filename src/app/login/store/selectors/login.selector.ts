import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../state/login.state';

export const selectorLoginFeature =
  createFeatureSelector<LoginState>('loginModule');

export const selectorLoginLoading = createSelector(
  selectorLoginFeature,
  (state: LoginState) => state.loading
);
