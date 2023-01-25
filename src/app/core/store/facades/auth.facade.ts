import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectorToken, selectorMe } from '../selectors/auth.selector';
import * as authActions from './../actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthFacadeService {
  constructor(private store: Store) {}

  setToken(token: string): void {
    this.store.dispatch(authActions.setToken({ token }));
  }

  getToken$ = this.store.select(selectorToken);

  getMe$ = this.store.select(selectorMe);
}
