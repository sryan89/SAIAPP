import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SAIAPP';
  pairings: [string, string][] = [];
  // changePairings(generatedPairings: [string, string][]) {
  //   this.pairings = generatedPairings
  // }
}
