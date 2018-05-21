import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';
import { listToDo } from '../shared/data';

// Декоратор
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../app.component.css','../todo-list/todo-list.component.css','./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: Todo;
  @Output() delete = new EventEmitter();

  toggle(){
    this.item.completed = !this.item.completed;
  }
  onDelete(){
    this.delete.emit();
  }
}
