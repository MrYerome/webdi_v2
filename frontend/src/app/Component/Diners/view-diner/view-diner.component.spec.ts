import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDinerComponent } from './view-diner.component';

describe('ViewDinerComponent', () => {
  let component: ViewDinerComponent;
  let fixture: ComponentFixture<ViewDinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
