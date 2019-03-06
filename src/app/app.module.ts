import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Clicker1Component } from './clicker1/clicker1.component';
import { Clicker2Component } from './clicker2/clicker2.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

=======
    Clicker1Component,
    Clicker2Component
>>>>>>> 09-services
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


