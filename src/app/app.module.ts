import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInfoService } from './user-info.service';
import { TimeLapsePipe } from './time-lapse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserDetailsComponent,
    TimeLapsePipe,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
