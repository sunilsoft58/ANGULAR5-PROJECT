import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirevtiveComponent } from './ng-for-direvtive.component';

describe('NgForDirevtiveComponent', () => {
  let component: NgForDirevtiveComponent;
  let fixture: ComponentFixture<NgForDirevtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDirevtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
