import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthPageControllerComponent } from './auth-page-controller/auth-page-controller.component';
import { LoginComponent } from './login/login.component';
import { HomePageModule } from '../home-page/home-page.module';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HomePageModule
  ],
  declarations: [AuthPageControllerComponent, LoginComponent],
  providers: [AuthService]
})
export class AuthPageModule { }
