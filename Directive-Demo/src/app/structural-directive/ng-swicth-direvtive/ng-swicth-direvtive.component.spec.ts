import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwicthDirevtiveComponent } from './ng-swicth-direvtive.component';

describe('NgSwicthDirevtiveComponent', () => {
  let component: NgSwicthDirevtiveComponent;
  let fixture: ComponentFixture<NgSwicthDirevtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwicthDirevtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwicthDirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
