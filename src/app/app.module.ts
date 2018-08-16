import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppTodoModule} from "@app-todo/app-todo.module";
import {AppRoutingModule} from "@routing/app-routing.module";

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMainModule} from "@app-main/app-main.module";
import {AppChartModule} from "@app-chat/app-chart.module";
import {FactorialPipe} from "@shared/pipes/factorial.pipe";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    AppTodoModule,
    AppMainModule,
    AppChartModule,
  ],
  declarations: [
    AppComponent,
    FactorialPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


