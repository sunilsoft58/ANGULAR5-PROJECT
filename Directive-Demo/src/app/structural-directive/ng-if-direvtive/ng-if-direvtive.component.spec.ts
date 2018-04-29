import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirevtiveComponent } from './ng-if-direvtive.component';

describe('NgIfDirevtiveComponent', () => {
  let component: NgIfDirevtiveComponent;
  let fixture: ComponentFixture<NgIfDirevtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfDirevtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfDirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
