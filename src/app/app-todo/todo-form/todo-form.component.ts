import { Component } from '@angular/core';
import {TodoService} from "@app-todo/shared/todo.service";

// Декоратор
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['../todo.component.css','./todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string = '';

  constructor(private todoService: TodoService){}

  onSubmit(){
    this.todoService.createTodo(this.newTodoTitle);
  }
}
