import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoldDinersComponent } from './listold-diners.component';

describe('ListoldDinersComponent', () => {
  let component: ListoldDinersComponent;
  let fixture: ComponentFixture<ListoldDinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoldDinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoldDinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
