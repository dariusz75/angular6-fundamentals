import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clicker1Component } from './clicker1.component';

describe('Clicker1Component', () => {
  let component: Clicker1Component;
  let fixture: ComponentFixture<Clicker1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clicker1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clicker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
