import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { AuthFacadeService } from '../store/facades/auth.facade';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class isAuthenticatedGuard implements CanActivate {
  constructor(
    private _authFacade: AuthFacadeService,
    private _router: Router
  ) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): Observable<boolean> {
    return this._authFacade.getToken$.pipe(
      switchMap((token) => {
        if (!token) {
          this._router.navigate(['/']);
          return of(false);
        }
        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
