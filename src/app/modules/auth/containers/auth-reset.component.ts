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
  selector: 'auth-reset-container',
  template: `
    <mat-card class="section-form">
      <div class="form-header">
      <div class="header-title">
        <h1 class="mat-display-1 m-0">New Password</h1>
        <p class="mat-subheading-2">Enter your new password below</p>
      </div>

      </div>

      <form class="auth-form w-100">
        <div class="form-field w-100">
          <mat-label>New Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <mat-icon matPrefix>lock</mat-icon>
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
          <mat-label>Confirm Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <mat-icon matPrefix>lock</mat-icon>
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
        <div class="forgot-password"></div>
        <button mat-raised-button color="primary" class="w-100">SUBMIT</button>
      </form>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthResetContainer {
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
