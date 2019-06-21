import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlacesComponent } from './form-places.component';

describe('FormPlacesComponent', () => {
  let component: FormPlacesComponent;
  let fixture: ComponentFixture<FormPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
