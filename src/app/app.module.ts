import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SitesModule } from './modules/sites.module';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { EventsComponent } from './modules/events/events.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAE5EO9tBR43COc6I7UvWXB8cCoKJynPq4",
  authDomain: "ng-ticket-seller.firebaseapp.com",
  databaseURL: "https://ng-ticket-seller.firebaseio.com",
  projectId: "ng-ticket-seller",
  storageBucket: "ng-ticket-seller.appspot.com",
  messagingSenderId: "578914972068"
};


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
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
