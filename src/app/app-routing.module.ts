import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageControllerComponent } from './home-page/home-page-controller/home-page-controller.component';
import { AuthPageControllerComponent } from './auth-page/auth-page-controller/auth-page-controller.component';

const routes: Routes = [
  { path: '', component: HomePageControllerComponent},
  { path: 'login', component: AuthPageControllerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
