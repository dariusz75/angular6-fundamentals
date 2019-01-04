import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = '';
  pasteWarning = '';
  x = '';
  y = '';
  colorClass = 'color-1';
  backgroundClass = '';
  logoUrl = '';

  onFocus() {
    this.backgroundClass = 'color-3';
  }

  onInput(event) {
    this.inputText = event.target.value;
  }

  onMouseMove(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  onPaste() {
    this.pasteWarning = 'Please do not paste';

  }

  change() {
    this.inputText = 'Text changed';
    this.colorClass = 'color-2';
  }
}

