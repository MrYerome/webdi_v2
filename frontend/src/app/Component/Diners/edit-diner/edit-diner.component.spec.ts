import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDinerComponent } from './edit-diner.component';

describe('EditDinerComponent', () => {
  let component: EditDinerComponent;
  let fixture: ComponentFixture<EditDinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
