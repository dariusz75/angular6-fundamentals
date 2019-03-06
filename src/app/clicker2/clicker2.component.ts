import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-clicker2',
  templateUrl: './clicker2.component.html',
  styleUrls: ['./clicker2.component.css']
})
export class Clicker2Component implements OnInit {

  title = 'clicker2 Component';
  clicks = 0;

  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

  add(): void {
    this.clickService.sumClicks();
  }
}
