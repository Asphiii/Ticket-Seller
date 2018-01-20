import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SitesModule } from './modules/sites.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SitesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
