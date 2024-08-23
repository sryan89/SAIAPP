import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PairingsParticipantsComponent } from './pairings-participants/pairings-participants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'participants-pairings', component: PairingsParticipantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }