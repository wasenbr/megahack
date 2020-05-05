



// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip'; 

import { DockComponent } from './dock.component';

@NgModule({
  declarations: [
    DockComponent
  ],
  entryComponents: [
    
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    DockComponent
  ]
})

export class DockModule { }
