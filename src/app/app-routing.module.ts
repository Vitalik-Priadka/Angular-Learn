import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./angular-bot/main/main.component";
import {ChatComponent} from "./angular-bot/chat/chat.component";
import {TodoComponent} from "./todo-app/todo/todo.component";
import {TestComponent} from "./tests/test/test.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent, data: { title: 'Main Page' }},
  {path: "chat", component: ChatComponent, data: { title: 'Chat Page' }},
  {path: "todo", component: TodoComponent, data: { title: 'Todo Page' }},
  {path: "test", component: TestComponent, data: { title: 'Test Page' }},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
