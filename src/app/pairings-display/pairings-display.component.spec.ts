import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairingsDisplayComponent } from './pairings-display.component';

describe('PairingsDisplayComponent', () => {
  let component: PairingsDisplayComponent;
  let fixture: ComponentFixture<PairingsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairingsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairingsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
