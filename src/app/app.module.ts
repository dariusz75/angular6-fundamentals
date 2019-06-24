import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> 15-http-put
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    HttpClientModule
>>>>>>> 15-http-put
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


