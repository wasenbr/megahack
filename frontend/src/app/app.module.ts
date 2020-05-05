import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { GameContextContainerComponent } from './components/game-context-container/game-context-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameBackgroundComponent } from './components/game-background/game-background.component';
import { GameStatisticsContainerModule } from './components/game-statistics-container/game-statistics-container.module';
import { DockModule } from './components/dock/dock.module';
import { GameContextContainerModule } from './components/game-context-container/game-context-container.module';

@NgModule({
  declarations: [
    AppComponent,
    GameBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameStatisticsContainerModule,
    DockModule,
    GameContextContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
