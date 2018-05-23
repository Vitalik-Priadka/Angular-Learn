import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ],
  declarations: [MainComponent, ChatComponent]
})
export class AngularBotModule { }
