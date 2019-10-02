import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from 'bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavComponent } from './components/fragments/nav/nav.component';
import { BannerComponent } from './components/layout/banner/banner.component';
import { HighlightsComponent } from './components/layout/highlights/highlights.component';
import { HighlightsCardComponent } from './components/fragments/highlights-card/highlights-card.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FooterNavComponent } from './components/fragments/footer-nav/footer-nav.component';
import { MobileNavComponent } from './components/fragments/mobile-nav/mobile-nav.component';
import { SocialBarComponent } from './components/fragments/social-bar/social-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    BannerComponent,
    HighlightsComponent,
    HighlightsCardComponent,
    FooterComponent,
    FooterNavComponent,
    MobileNavComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
