import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDinersComponent } from './list-diners.component';

describe('ListDinersComponent', () => {
  let component: ListDinersComponent;
  let fixture: ComponentFixture<ListDinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
