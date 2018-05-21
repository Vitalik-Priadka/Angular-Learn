import { Component } from '@angular/core';

class Todo {
  constructor(public title: string,
              public completed: boolean = false){}
}

const todos: Todo[] = [
  {
    title: 'Изучить JavaScript',
    completed: false,
  },
  {
    title: 'Изучить Angular',
    completed: false,
  },
  {
    title: 'Написать приложение',
    completed: true,
  },
  {
    title: 'Купить бананьчик',
    completed: true,
  },
];

// Декоратор
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Vilatik First App';
  version: number = 0.3;
  todos: Todo[] = todos;
  newTodoTitle: string = '';

  create() {
    let todo: Todo = new Todo(this.newTodoTitle);
    this.todos.push(todo);
    this.newTodoTitle = '';
  }

  toggle(todo: Todo){
    todo.completed = !todo.completed;
  };

  delete(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index){
      this.todos.splice(index,1);
    }
  };
}
