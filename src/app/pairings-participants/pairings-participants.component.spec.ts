import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairingsParticipantsComponent } from './pairings-participants.component';

describe('PairingsParticipantsComponent', () => {
  let component: PairingsParticipantsComponent;
  let fixture: ComponentFixture<PairingsParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairingsParticipantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairingsParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
