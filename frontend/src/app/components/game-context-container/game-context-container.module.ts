import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameContextContainerComponent } from './game-context-container.component'
import { ProfissoesModule } from './profissoes/profissoes.module';

@NgModule({
  declarations: [
    GameContextContainerComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    ProfissoesModule
  ],
  exports: [GameContextContainerComponent]
})

export class GameContextContainerModule { }
