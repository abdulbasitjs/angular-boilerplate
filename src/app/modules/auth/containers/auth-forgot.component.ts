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
  selector: 'auth-forgot-container',
  template: `
    <mat-card class="section-form">
      <h1 class="mat-display-1">Forgot Password</h1>
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
        <div class="forgot-password">
          <a routerLink="../login" class="forgot-password-label"
            >Return to sign in</a
          >
        </div>
        <button mat-raised-button color="primary" class="w-100">SUBMIT</button>
      </form>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotContainer {
  AUTH = AUTH;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

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
