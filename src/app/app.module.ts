import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
To use ngModel directive we need to import the module from the package which contains that module
The ngModel directive is in FormsModule, so we need to import it by
import { FormsModule } from '@angular/forms';

Next we need to tel the Angular we want to include the FormsModule into our project by
imports: [
    BrowserModule,
    FormsModule
  ]
*/
