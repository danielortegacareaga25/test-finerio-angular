import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovementsState } from '../state/movements';

export const selectorMovementFeature =
  createFeatureSelector<MovementsState>('movementsModule');

export const selectorMovements = createSelector(
  selectorMovementFeature,
  (state: MovementsState) => state.listMovementes
);

export const selectorOffSet = createSelector(
  selectorMovementFeature,
  (state: MovementsState) => state.offSet
);

export const selectorMax = createSelector(
  selectorMovementFeature,
  (state: MovementsState) => state.maxItems
);

export const selectorMoreItems = createSelector(
  selectorMovementFeature,
  (state: MovementsState) => state.noMoreItems
);
