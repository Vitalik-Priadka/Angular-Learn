import { Component, OnInit } from '@angular/core';

import { TodoService} from "../todo.service";
import { Todo } from '../todo';
import {HttpService} from "../../shared/http.service";


// Декоратор
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../todo/todo.component.css','./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService){
    this.todos = [];
    // this.todoService.getListTodos().subscribe( data => {
    //   console.log(JSON.parse(data['data']));
    // });
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
