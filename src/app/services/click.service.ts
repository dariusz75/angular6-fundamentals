import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  summedClicks = 0;

  constructor() { }

  sumClicks(): void {
    this.summedClicks += 1;
  }
}
