import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from "@app-todo/shared/todo";

// Декоратор
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../todo.component.css','../todo-list/todo-list.component.css','./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: Todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle(){
    this.toggle.emit(this.item);
  }
  onDelete(){
    this.delete.emit(this.item);
  }
}
