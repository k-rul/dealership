import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { appRouting } from './app.routing';
import { DealershipModule } from './dealership/dealership.module';
import { NavComponent } from './nav/nav.component';
import { UserLoginComponent } from './user/user-login.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserLoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRouting,
    DealershipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
