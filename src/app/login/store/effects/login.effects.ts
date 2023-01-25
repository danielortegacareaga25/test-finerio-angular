import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { LoginService } from '../../services/login.service';
import * as actionsLogin from '../actions/login.actions';
import * as actionsAuth from './../../../core/store/actions/auth.actions';
import swal from 'sweetalert2';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private _loginService: LoginService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsLogin.loginUser),
      switchMap(({ user, password }) =>
        this._loginService.login(user, password).pipe(
          switchMap(({ access_token }) => {
            return [
              actionsLogin.loginUserSuccess(),
              actionsAuth.setToken({ token: access_token }),
              actionsAuth.getMe(),
            ];
          }),
          catchError((err) => {
            swal.fire(
              'Parece que tenemos un problema',
              'Revisa tus credenciales o conexión',
              'info'
            );
            return of(actionsLogin.loginUserError({ error: err }));
          })
        )
      )
    )
  );
}
