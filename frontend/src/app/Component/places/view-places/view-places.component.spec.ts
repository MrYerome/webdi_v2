import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacesComponent } from './view-places.component';

describe('ViewPlacesComponent', () => {
  let component: ViewPlacesComponent;
  let fixture: ComponentFixture<ViewPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
