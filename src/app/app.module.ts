import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Clicker1Component } from './clicker1/clicker1.component';
import { Clicker2Component } from './clicker2/clicker2.component';

@NgModule({
  declarations: [
    AppComponent,
    Clicker1Component,
    Clicker2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


