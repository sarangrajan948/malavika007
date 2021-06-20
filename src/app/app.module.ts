import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HappyBirthdayComponent } from './happy-birthday/happy-birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyBirthdayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
