import { Component, Input} from '@angular/core';
import { PairingsService } from '../pairings.service';

@Component({
  selector: 'app-pairings-display',
  templateUrl: './pairings-display.component.html',
  styleUrls: ['./pairings-display.component.scss']
})
export class PairingsDisplayComponent {
  //pairings$ = this.pairingsService.pairings$
  @Input() pairings: [string, string][] = [];


  constructor(private pairingsService: PairingsService) { }

  getPairings(): void {
    this.pairingsService.getPairings().subscribe(pairings => this.pairings = pairings);
    console.log('this.pairings after subscribe in pairings-display.component', this.pairings)
  }

  ngOnInit(): void {
    this.getPairings();
  }
}

  // ngOnChanges(changes: SimpleChanges) {
  // if (changes['pairings']) {
  //   console.log('Pairings changed:', changes['pairings'].currentValue);
  //   // Add any additional logic to handle changes to the pairings input property
  // }
  // }
//}
