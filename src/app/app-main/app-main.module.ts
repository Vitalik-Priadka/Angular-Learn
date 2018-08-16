import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {MainComponent} from "@app-main/main.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    MainComponent
  ]
})
export class AppMainModule { }
