import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipeDinerComponent } from './participe-diner.component';

describe('ParticipeDinerComponent', () => {
  let component: ParticipeDinerComponent;
  let fixture: ComponentFixture<ParticipeDinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipeDinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipeDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
