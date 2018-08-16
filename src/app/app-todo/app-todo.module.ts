import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {TodoFormComponent} from '@app-todo/todo-form/todo-form.component';
import {TodoListComponent} from '@app-todo/todo-list/todo-list.component';
import {TodoItemComponent} from '@app-todo/todo-item/todo-item.component';
import {TodoService} from "@app-todo/shared/todo.service";
import {TodoComponent} from '@app-todo/todo.component';


@NgModule({
  declarations: [   //Регистрация
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [
    TodoComponent
  ]
})
export class AppTodoModule {}
