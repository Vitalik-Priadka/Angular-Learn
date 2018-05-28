import {Directive, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from "./todo.service";
import { TodoComponent } from './todo/todo.component';


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
  providers: [TodoService], // Регистр сервисов
  bootstrap: [TodoComponent, ] //Для запуска использовать это
})
export class TodoAppModule {}
