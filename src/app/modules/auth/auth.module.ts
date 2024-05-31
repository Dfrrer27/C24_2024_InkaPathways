import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthSignInComponent } from './auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    AuthSignInComponent,
    AuthSignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class AuthModule { }
