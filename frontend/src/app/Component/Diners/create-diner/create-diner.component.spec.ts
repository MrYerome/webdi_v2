import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDinerComponent } from './create-diner.component';

describe('CreateDinerComponent', () => {
  let component: CreateDinerComponent;
  let fixture: ComponentFixture<CreateDinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
