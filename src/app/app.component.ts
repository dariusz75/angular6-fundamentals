import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = 'Property Binding Text';
  maxLength = 5;
  colorClass = 'color-1';
  logoUrl = '';

  change() {
    this.inputText = 'Text changed';
    this.maxLength = 10;
    this.colorClass = 'color-2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }
}

