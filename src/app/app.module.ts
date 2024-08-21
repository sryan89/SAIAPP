import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticipantInputComponent } from './participant-input/participant-input.component';
import { PairingsDisplayComponent } from './pairings-display/pairings-display.component';
import { PairingsService } from './pairings.service';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantInputComponent,
    PairingsDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PairingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
