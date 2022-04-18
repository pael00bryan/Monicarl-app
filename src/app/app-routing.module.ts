import { AuthGuard } from './auth/guards/auth.guard';
import { ForgotPasswordComponent } from './landing-page/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './landing-page/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  // ADMIN
  { path: 'admin',
  canActivate : [AuthGuard],
  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)},

  
  // CLIENT
  { path: 'client', loadChildren: () => import('./client/client.module').then((m) => m.ClientModule)},


  // ROUTE ERROR
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
