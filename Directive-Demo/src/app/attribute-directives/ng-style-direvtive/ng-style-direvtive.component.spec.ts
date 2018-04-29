import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDirevtiveComponent } from './ng-style-direvtive.component';

describe('NgStyleDirevtiveComponent', () => {
  let component: NgStyleDirevtiveComponent;
  let fixture: ComponentFixture<NgStyleDirevtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleDirevtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleDirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
