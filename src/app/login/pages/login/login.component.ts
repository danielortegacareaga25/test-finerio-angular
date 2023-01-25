import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFacadeService } from '../../store/facades/login.facade';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  public error = '';
  constructor(private _loginFacadeService: LoginFacadeService) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  isLoading$ = this._loginFacadeService.isLoading$;

  onFormSubmit(): void {
    const { email, password } = this.form.value;
    if (email && password) this._loginFacadeService.login(email, password);
  }
}
