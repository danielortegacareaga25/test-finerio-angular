import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { MovementService } from '../../services/movements.service';
import * as movementsActions from './../actions/movements.actions';
import { AuthFacadeService } from '../../../core/store/facades/auth.facade';
import { MovementsFacadeService } from '../facades/movements.facade';

@Injectable()
export class MovementsEffects {
  constructor(
    private actions$: Actions,
    private _movementService: MovementService,
    private _authFacadeService: AuthFacadeService,
    private _movementsFacadeService: MovementsFacadeService
  ) {}

  getMovementsNext$ = createEffect(() =>
    this.actions$.pipe(
      ofType(movementsActions.getMovements),
      withLatestFrom(
        this._authFacadeService.getMe$,
        this._movementsFacadeService.getOffSet$,
        this._movementsFacadeService.getMax$,
        this._movementsFacadeService.getNoMoreItems$
      ),
      switchMap(([, me, offSet, max, noMore]) =>
        !noMore
          ? this._movementService.getMovements(me?.id ?? '', offSet, max).pipe(
              switchMap(({ data, size }) => {
                if (!data.length) {
                  return [movementsActions.noMoreItemsResponse()];
                }
                return [
                  movementsActions.getMovementsSuccess({ items: data }),
                  movementsActions.incrementOffSetMax({
                    offSet: size,
                    max: size,
                  }),
                ];
              }),
              catchError((err) =>
                of(movementsActions.getMovementsError({ error: err }))
              )
            )
          : of()
      )
    )
  );
}
