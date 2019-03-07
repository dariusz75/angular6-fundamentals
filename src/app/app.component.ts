import { Component } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Services';

  constructor(public clickService: ClickService) { }

}

