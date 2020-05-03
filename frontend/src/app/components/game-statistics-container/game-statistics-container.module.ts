import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStatisticsContainerComponent } from './game-statistics-container.component'
import { ClockModule } from './clock/clock.module';

@NgModule({
  declarations: [
    GameStatisticsContainerComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    ClockModule
  ],
  exports: [GameStatisticsContainerComponent]
})

export class GameStatisticsContainerModule { }
