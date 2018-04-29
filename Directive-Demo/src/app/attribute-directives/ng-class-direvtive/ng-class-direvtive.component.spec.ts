import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDirevtiveComponent } from './ng-class-direvtive.component';

describe('NgClassDirevtiveComponent', () => {
  let component: NgClassDirevtiveComponent;
  let fixture: ComponentFixture<NgClassDirevtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassDirevtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassDirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
