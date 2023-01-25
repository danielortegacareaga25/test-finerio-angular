import { Action, createReducer, on } from '@ngrx/store';
import * as MovementsActions from '../actions/movements.actions';
import { MovementsState } from '../state/movements';

const initialState: MovementsState = {
  loading: false,
  error: undefined,
  listMovementes: [],
  offSet: 0,
  maxItems: 10,
  noMoreItems: false,
};

const movementReducer = createReducer(
  initialState,
  on(MovementsActions.getMovementsSuccess, (state, { items }) => ({
    ...state,
    listMovementes: [...state.listMovementes, ...items],
    loading: false,
  })),
  on(MovementsActions.getMovementsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(MovementsActions.incrementOffSetMax, (state, { offSet, max }) => ({
    ...state,
    offSet: state.listMovementes.length,
    maxItems: state.maxItems + max,
  })),
  on(MovementsActions.noMoreItemsResponse, (state) => ({
    ...state,
    noMoreItems: true,
  }))
);

export function MovementReducer(
  state: MovementsState | undefined,
  action: Action
) {
  return movementReducer(state, action);
}
