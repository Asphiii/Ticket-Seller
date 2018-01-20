import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './nav-bar/nav-bar.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomepageComponent,
    NavigationComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomepageComponent,
    NavigationComponent,
    EventsComponent
  ]
})
export class SitesModule { }
