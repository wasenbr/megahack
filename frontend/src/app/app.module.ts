import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DockComponent } from './components/dock/dock.component';
import { GameContextContainerComponent } from './components/game-context-container/game-context-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameBackgroundComponent } from './components/game-background/game-background.component';
// import { MatIconModule } from '@angular/material/icon';
import { GameStatisticsContainerModule } from './components/game-statistics-container/game-statistics-container.module';
import { ClockModule } from './components/game-statistics-container/clock/clock.module';

@NgModule({
  declarations: [
    AppComponent,
    DockComponent,
    GameContextContainerComponent,
    GameBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatIconModule,
    GameStatisticsContainerModule,
    ClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
