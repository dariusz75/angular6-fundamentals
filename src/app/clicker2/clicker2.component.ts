import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker2',
  templateUrl: './clicker2.component.html',
  styleUrls: ['./clicker2.component.css']
})
export class Clicker2Component implements OnInit {

  title = 'clicker2 Component';
  clicks = 0;

  constructor() { }

  ngOnInit() {
  }

  add(): void {
    this.clicks += 1;
  }

}
