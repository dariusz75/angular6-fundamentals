import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = 'Property Binding Text';
  inputText2Way = '';
  button = true;
  showClick = '';

  click(event) {
    this.showClick = 'Button activated';
    this.button = false;
  }
}

