import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {FactorialPipe} from "./factorial.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [TestComponent, FactorialPipe]
})
export class TestsModule { }
