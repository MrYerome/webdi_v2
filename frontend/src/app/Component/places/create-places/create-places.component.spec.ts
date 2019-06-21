import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlacesComponent } from './create-places.component';

describe('CreatePlacesComponent', () => {
  let component: CreatePlacesComponent;
  let fixture: ComponentFixture<CreatePlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
