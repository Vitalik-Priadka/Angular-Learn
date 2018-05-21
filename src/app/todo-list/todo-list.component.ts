import { Component, OnInit } from '@angular/core';

import { TodoService} from "../shared/todo.service";
import { Todo } from '../shared/todo';


// Декоратор
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../app.component.css','./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService){
    this.todos = [];
  }
  ngOnInit(){
    this.todos = this.todoService.getTodos();
  }

  delete(todo: Todo){
    this.todoService.deleteTodo(todo);
  }
  toggle(todo: Todo){
    this.todoService.toggleTodo(todo);
  }
}
