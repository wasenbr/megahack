// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockComponent } from './clock.component'
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ClockComponent
  ],
  entryComponents: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
    
  ],
  exports: [ClockComponent]
})

export class ClockModule { }
