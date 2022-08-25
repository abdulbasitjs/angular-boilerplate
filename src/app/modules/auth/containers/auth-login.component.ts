import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AUTH } from '@configs/ui/messages';
import { EP } from '@core/configs';

@Component({
  selector: 'auth-login-container',
  template: `
    <mat-card class="section-form">
      <div class="form-header">
        <div class="header-title">
          <h1 class="mat-display-1 m-0">Sign In</h1>
          <p class="mat-subheading-2">Enter your details below</p>
        </div>
      </div>
      <form class="auth-form">
        <div class="form-field w-100 mb-10">
          <mat-label>Email</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <mat-icon matPrefix>person</mat-icon>
            <input
              type="email"
              matInput
              [formControl]="emailFormControl"
              [errorStateMatcher]="matcher"
              placeholder="abc@snx.com"
            />
            <mat-error
              *ngIf="
                emailFormControl.hasError('email') &&
                !emailFormControl.hasError('required')
              "
            >
              {{ AUTH.LOGIN.INVALID_EMAIL }}
            </mat-error>
            <mat-error *ngIf="emailFormControl.hasError('required')">
              {{ AUTH.LOGIN.EMPTY_EMAIL }}
            </mat-error>
          </mat-form-field>
        </div>

        <div class="form-field w-100">
          <mat-label>Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <mat-icon matPrefix>lock</mat-icon>
            <input
              matInput
              [type]="hide ? 'password' : 'text'"
              [formControl]="passwordFormControl"
              [errorStateMatcher]="matcher"
              placeholder="********"
            />
            <button
              mat-icon-button
              matSuffix
              (click)="hide = !hide"
              [attr.aria-label]="'Hide password'"
              [attr.aria-pressed]="hide"
            >
              <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
            <mat-error
              *ngIf="
                passwordFormControl.hasError('password') &&
                !passwordFormControl.hasError('required')
              "
            >
              {{ AUTH.LOGIN.INVALID_PASSWORD }}
            </mat-error>
            <mat-error *ngIf="passwordFormControl.hasError('required')">
              {{ AUTH.LOGIN.EMPTY_PASSWORD }}
            </mat-error>
          </mat-form-field>
        </div>
        <div class="forgot-password">
          <a routerLink="../forgot" class="forgot-password-label"
            >Forgot Passowrd?</a
          >
        </div>
        <button
          (click)="onLogin()"
          mat-raised-button
          color="primary"
          class="w-100"
        >
          SIGN IN
        </button>
      </form>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginContainer {
  AUTH = AUTH;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  hide: boolean = true;

  constructor(
    private http: HttpClient,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(fromStore.getCurrentUser).subscribe((d) => {
      console.log(d);
    });
  }

  onLogin() {
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;
    this.http.post(EP.Login, { email, password }).subscribe((data) => {
      console.log(data);
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
