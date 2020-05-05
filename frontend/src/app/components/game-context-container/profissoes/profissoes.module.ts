import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissoesComponent } from './profissoes.component'
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ProfissoesComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatChipsModule
  ],
  exports: [ProfissoesComponent]
})

export class ProfissoesModule { }
