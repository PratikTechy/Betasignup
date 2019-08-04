import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { HomeComponent } from './home/home.component'
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ThankYouComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'' , component:HomeComponent, pathMatch:'full'},
      {path:'home' , component:HomeComponent},
      {path:'sign-up' , component:SignupComponent},
      {path:'thank-you' , component:ThankYouComponent}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
