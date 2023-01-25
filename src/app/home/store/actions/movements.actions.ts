import { createAction, props } from '@ngrx/store';
import { Movement } from '../../interfaces/list';

export const getMovements = createAction('[Home module] get Movements');

export const getMovementsSuccess = createAction(
  '[Home module] get Movements success',
  props<{ items: Movement[] }>()
);

export const getMovementsError = createAction(
  '[Home module] get Movements error',
  props<{ error: string }>()
);

export const incrementOffSetMax = createAction(
  '[Home module] increment offSet & Max',
  props<{ offSet: number; max: number }>()
);

export const noMoreItemsResponse = createAction('[Home module] no more items');
