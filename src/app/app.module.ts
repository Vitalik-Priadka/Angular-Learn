import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoAppModule} from "./todo-app/todo-app.module";
import {AngularBotModule} from "./angular-bot/angular-bot.module";
import { AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [   //Регистрация
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoAppModule,
    AngularBotModule,
  ],
  providers: [], // Регистр сервисов
  bootstrap: [AppComponent] //Для запуска использовать это
})
export class AppModule { }
