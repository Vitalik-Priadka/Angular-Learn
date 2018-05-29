import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoAppModule} from "./todo-app/todo-app.module";
import {AngularBotModule} from "./angular-bot/angular-bot.module";
import { AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TestsModule} from "./tests/tests.module";


@NgModule({
  declarations: [   //Регистрация
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TodoAppModule,
    AngularBotModule,
    TestsModule
  ],
  providers: [], // Регистр сервисов
  bootstrap: [AppComponent] //Для запуска использовать это
})
export class AppModule { }

/*
 ng g module tests --spec false
 ng g component tests/new-component --spec false --style=scss
 ng g service tests/my-new-service
  */

