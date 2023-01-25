import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import * as actionsAuth from './../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private _authService: AuthService) {}

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsAuth.getMe),
      switchMap(() =>
        this._authService.getMe().pipe(
          switchMap((me) => {
            return [actionsAuth.getMeSuccess({ data: me })];
          }),
          catchError((err) => of(actionsAuth.getMeError({ error: err })))
        )
      )
    )
  );
}
