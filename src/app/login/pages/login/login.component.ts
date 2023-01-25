import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectorLoginLoading } from '../../store/selectors/login.selector';
import { loginUser } from '../../store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  public error = '';
  constructor(private store: Store) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.store.dispatch(loginUser());
    // }, 2000);
  }

  // isLoading$ = this.store.pipe(select(selectorLoginLoading));

  onFormSubmit(): void {
    const { email, password } = this.form.value;
    if (email && password)
      this.store.dispatch(loginUser({ user: email, password }));
  }
}
