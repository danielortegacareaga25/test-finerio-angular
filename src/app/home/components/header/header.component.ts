import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs';
import { AuthFacadeService } from 'src/app/core/store/facades/auth.facade';

@Component({
  selector: 'home-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public email: string = '';
  constructor(private _authFacadeService: AuthFacadeService) {
    this._authFacadeService.getMe$.pipe(take(1)).subscribe((data) => {
      this.email = data?.email ?? '';
    });
  }

  ngOnInit() {}
}
