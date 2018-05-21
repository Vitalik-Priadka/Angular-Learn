import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';


// Декоратор
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../app.component.css','./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];

  toggle(todo: Todo){
    todo.completed = !todo.completed;
  }

  delete(todo: Todo){
    let index = this.todos.indexOf(todo);
    if(index >= 0){
      this.todos.splice(index,1);
    }
  }
}
