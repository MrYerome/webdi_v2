import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendActivationComponent } from './send-activation.component';

describe('SendActivationComponent', () => {
  let component: SendActivationComponent;
  let fixture: ComponentFixture<SendActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
