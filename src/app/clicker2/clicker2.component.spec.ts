import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clicker2Component } from './clicker2.component';

describe('Clicker2Component', () => {
  let component: Clicker2Component;
  let fixture: ComponentFixture<Clicker2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clicker2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clicker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
