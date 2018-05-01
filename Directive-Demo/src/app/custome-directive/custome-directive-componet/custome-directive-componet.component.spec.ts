import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeDirectiveComponetComponent } from './custome-directive-componet.component';

describe('CustomeDirectiveComponetComponent', () => {
  let component: CustomeDirectiveComponetComponent;
  let fixture: ComponentFixture<CustomeDirectiveComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeDirectiveComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeDirectiveComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
