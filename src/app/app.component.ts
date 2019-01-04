import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  ocupation = '';

  changeName(event) {
    this.name = event.target.value;
  }

  changeOcupation(event) {
    this.ocupation = event.target.value;
  }
}

