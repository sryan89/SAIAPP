import { Component, EventEmitter, Output } from '@angular/core';
import { PairingsService } from '../pairings.service';

@Component({
  selector: 'app-participant-input',
  templateUrl: './participant-input.component.html',
  styleUrls: ['./participant-input.component.scss']
})
export class ParticipantInputComponent {
  participants: string[] = [];
  participantName: string = '';

  @Output() changePairings = new EventEmitter<[string, string][]>();

  constructor(private pairingsService: PairingsService) {}

  addParticipant() {
    if (this.participantName) {
      this.participants.push(this.participantName);
      this.participantName = '';
    }
  }

  generatePairings() {
    const pairings = this.pairingsService.generatePairings(this.participants);
    console.log('generatePairings in participant-input.component', pairings)
    this.changePairings.emit(pairings);
  }
}
