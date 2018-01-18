import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'Home ! '+environment.title }
  },
  { path: 'login',
    component: LoginComponent,
    data: { title: 'Login ! TestDemo' }
  },
  { path: 'register',
    component: RegisterComponent,
    data: { title: 'Register ! TestDemo' }
  },
  { path: 'forgot-password',
    component: ForgotComponent,
    data: { title: 'Forgot Password ! TestDemo' }
  },
  { path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard ! TestDemo' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PortfoliosComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
