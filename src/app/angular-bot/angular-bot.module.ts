import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from "@angular/material";
import {FactorialPipe} from "./factorial.pipe";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [MainComponent, ChatComponent, FactorialPipe]
})
export class AngularBotModule { }
