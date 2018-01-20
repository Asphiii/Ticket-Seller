import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './nav-bar/nav-bar.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact-page/contact.component';



@NgModule({
  declarations: [
    HomepageComponent,
    NavigationComponent,
    EventsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomepageComponent,
    NavigationComponent,
    EventsComponent,
    ContactComponent
  ]
})
export class SitesModule { }
