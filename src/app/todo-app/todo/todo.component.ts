import {Component, Directive, ElementRef} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
@Directive({
  selector: '[bold]'
})
export class TodoComponent{
  info: string = 'Вы можете записать Task и добавить его в List:';

  constructor(private todoService: TodoService, private elementRef: ElementRef) {
    todoService.trace('Init ToDoComponent');
    this.elementRef.nativeElement.style.fontWeight = "bold";
  }

}
