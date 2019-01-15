import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-fundamentals';
  tasksList = ['Task One', 'Task Two', 'Task Three'];

  selected(task: string) {
    console.log(task);
  }

}

