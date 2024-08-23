import { Component, Input, OnInit } from '@angular/core';
import { PairingsService } from '../pairings.service';

@Component({
  selector: 'app-pairings-display',
  templateUrl: './pairings-display.component.html',
  styleUrls: ['./pairings-display.component.scss']
})
export class PairingsDisplayComponent implements OnInit {
  @Input() pairings: [string, string][] = [];

  constructor(private pairingsService: PairingsService) { }

  getPairings(): void {
    this.pairingsService.getPairings().subscribe(pairings => this.pairings = pairings);
    console.log('this.pairings after subscribe in pairings-display.component', this.pairings)
  }

  ngOnInit(): void {
    this.getPairings();
  }

  clearPairings() {
    this.pairingsService.clearPairings();
    this.getPairings();
  }
}
