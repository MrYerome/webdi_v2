import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinersComponent } from './diners.component';

describe('DinersComponent', () => {
  let component: DinersComponent;
  let fixture: ComponentFixture<DinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
