import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ScrollAfterClickComponent } from './scroll-after-click/scroll-after-click.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent,
    ScrollAfterClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
