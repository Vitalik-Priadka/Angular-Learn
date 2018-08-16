import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ChatComponent} from "@app-chat/chat.component";
import {ChatService} from "@app-chat/shared/chat.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    ChatComponent
  ],
  providers: [
    ChatService
  ]
})
export class AppChartModule { }
