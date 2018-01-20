import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
      HomepageComponent,
      NavigationComponent
  ]
})
export class SitesModule { }
