import { Component } from '@angular/core';
import { Todo } from './shared/todo';
import { listToDo } from './shared/data';


// Декоратор
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: string = 'Вы можете записать Task и добавить его в List:';
  todos: Todo[] = listToDo;

  create(title: string){
    const todo = new Todo(title);
    this.todos.push(todo);
  }
}
