import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DockComponent } from './components/dock/dock.component';
import { GameContextContainerComponent } from './components/game-context-container/game-context-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameBackgroundComponent } from './components/game-background/game-background.component';
import { GameStatisticsContainerComponent } from './components/game-statistics-container/game-statistics-container.component';
import { ClockComponent } from './components/game-statistics-container/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    DockComponent,
    GameContextContainerComponent,
    GameBackgroundComponent,
    GameStatisticsContainerComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
