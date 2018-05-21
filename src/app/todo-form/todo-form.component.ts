import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';
import { listToDo } from '../shared/data';

// Декоратор
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['../app.component.css','./todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string = '';
  @Output() add = new EventEmitter();

  onSubmit(){
    this.add.emit(this.newTodoTitle);
  }
}
