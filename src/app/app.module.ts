import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticipantInputComponent } from './participant-input/participant-input.component';
import { PairingsDisplayComponent } from './pairings-display/pairings-display.component';
import { PairingsService } from './pairings.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PairingsParticipantsComponent } from './pairings-participants/pairings-participants.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantInputComponent,
    PairingsDisplayComponent,
    HomeComponent,
    PairingsParticipantsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PairingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
