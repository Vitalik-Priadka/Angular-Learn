import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./angular-bot/main/main.component";
import {ChatComponent} from "./angular-bot/chat/chat.component";
import {TodoComponent} from "./todo-app/todo/todo.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent},
  {path: "chat", component: ChatComponent},
  {path: "todo", component: TodoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
