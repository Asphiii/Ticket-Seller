import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SitesModule } from './modules/sites.module';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { EventsComponent } from './modules/events/events.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'news', component: HomepageComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SitesModule,
    RouterModule.forRoot (appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
