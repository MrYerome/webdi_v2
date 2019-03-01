import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipeoldDinersComponent } from './participeold-diners.component';

describe('ParticipeoldDinersComponent', () => {
  let component: ParticipeoldDinersComponent;
  let fixture: ComponentFixture<ParticipeoldDinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipeoldDinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipeoldDinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
