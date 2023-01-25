import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from '../state/auth.state';

export const selectorLoginFeature =
  createFeatureSelector<CoreState>('authModule');

export const selectorToken = createSelector(
  selectorLoginFeature,
  (state: CoreState) => state.token
);

export const selectorMe = createSelector(
  selectorLoginFeature,
  (state: CoreState) => state.me
);
