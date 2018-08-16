import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import {MainComponent} from "@app-main/main.component";
import {ChatComponent} from "@app-chat/chat.component";
import {TodoComponent} from "@app-todo/todo.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent, data: { title: 'Main Page' }},
  {path: "chat", component: ChatComponent, data: { title: 'Chat Page' }},
  {path: "todo", component: TodoComponent, data: { title: 'Todo Page' }},
  {path: "**", pathMatch: "full", redirectTo: ""},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
