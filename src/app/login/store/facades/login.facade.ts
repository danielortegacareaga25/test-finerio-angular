import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectorLoginLoading } from '../selectors/login.selector';
import * as loginActions from './../actions/login.actions';

@Injectable({ providedIn: 'root' })
export class LoginFacadeService {
  constructor(private store: Store) {}

  login(user: string, password: string): void {
    this.store.dispatch(loginActions.loginUser({ user, password }));
  }

  isLoading$ = this.store.pipe(select(selectorLoginLoading));
}
