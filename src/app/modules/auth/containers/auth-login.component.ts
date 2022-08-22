import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AUTH } from '@configs/ui/messages';

@Component({
  selector: 'auth-login-container',
  template: `
    <mat-card class="section-form">
        <h1 class="mat-display-1">Sign in</h1>
        <form class="auth-form">
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
          <div class="forgot-password">
            <a routerLink="../forgot" class="forgot-password-label"
              >Forgot Passowrd?</a
            >
          </div>
          <button mat-raised-button color="primary" class="w-100">
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

  constructor() {}

  ngOnInit(): void {}
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
