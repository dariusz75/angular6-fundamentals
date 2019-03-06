import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker1',
  templateUrl: './clicker1.component.html',
  styleUrls: ['./clicker1.component.css']
})
export class Clicker1Component implements OnInit {

  title = 'clicker1 Component';
  clicks = 0;

  constructor() { }

  ngOnInit() {
  }

  add(): void {
    this.clicks += 1;
  }
}
