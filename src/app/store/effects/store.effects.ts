import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as actionsCore from './../../core/store/actions/auth.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private _router: Router) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionsCore.getMeSuccess),
        tap(() => this._router.navigate(['home']))
      ),
    { dispatch: false }
  );
}
