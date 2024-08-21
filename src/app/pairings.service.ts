import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PairingsService {

  constructor() { }
  private pairings: [string, string][] = [];

  // pairingsSubject$ = new BehaviorSubject(this.pairings);
  // pairings$ = this.pairingsSubject$.asObservable();
  // updatePairings(pairings: [string, string][]): void {
  //   this.pairingsSubject$.next(pairings);
  // }

  getPairings(): Observable<[string, string][]> {
    return of(this.pairings);
  }

  clearPairings(): void {
    this.pairings = [];
  }

  //   moneysSubject$ = new BehaviorSubject(this.initialMoneys);
  // moneys$ = this.moneysSubject$.asObservable();
  // updateDisplay({ amount, type }) {
  //   if (type === "sell") {
  //     this.moneysSubject$.next(amount + this.moneys);
  //   }
  //   if (type === "buy") {
  //     this.moneysSubject$.next(-amount + this.moneys);
  //   }
  // }
  // get moneys() {
  //   return this.moneysSubject$.value;
  // }

  generatePairings(participants: string[]): [string, string][] {
    for (let i = 0; i < participants.length; i += 2) {
      if (i + 1 < participants.length) {
        this.pairings.push([participants[i], participants[i + 1]]);
      } else {
        this.pairings.push([participants[i], 'BYE']);
      }
    }
    return this.pairings;
  }
}
