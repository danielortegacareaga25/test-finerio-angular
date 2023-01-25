import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectorOffSet,
  selectorMax,
  selectorMoreItems,
  selectorMovements,
} from '../selectors/movements.selector';
import * as movementsActions from './../actions/movements.actions';

@Injectable({ providedIn: 'root' })
export class MovementsFacadeService {
  constructor(private store: Store) {}

  getMovements(): void {
    this.store.dispatch(movementsActions.getMovements());
  }

  getMovements$ = this.store.select(selectorMovements);

  getOffSet$ = this.store.select(selectorOffSet);

  getMax$ = this.store.select(selectorMax);

  getNoMoreItems$ = this.store.select(selectorMoreItems);
}
