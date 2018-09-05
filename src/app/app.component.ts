import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Dariusz';
}

/*
We have changed title to name in the AppComponent class
Now we need to go to app.component.html file to use it in
*/
