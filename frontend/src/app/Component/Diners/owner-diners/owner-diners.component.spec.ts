import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDinersComponent } from './owner-diners.component';

describe('OwnerDinersComponent', () => {
  let component: OwnerDinersComponent;
  let fixture: ComponentFixture<OwnerDinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
