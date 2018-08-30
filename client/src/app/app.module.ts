import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: { title: 'tManager Dashboard' } },
  {path: 'login', component: LoginComponent, data: { title: 'Log In | tManager' } },
  {path: 'signup', component: SignupComponent, data: { title: 'Sign Up | tManager' } },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found | tManager' } }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
