import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlacesComponent } from './edit-places.component';

describe('EditPlacesComponent', () => {
  let component: EditPlacesComponent;
  let fixture: ComponentFixture<EditPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
