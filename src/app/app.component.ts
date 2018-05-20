import { Component } from '@angular/core';

const todos = [
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
];

// Декоратор
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vilatik First App';
  version = '0.1';
  todos = todos;

  toggle(todo: any){
    todo.completed = !todo.completed;
  };

  delete(todo: any){
    let index = this.todos.indexOf(todo);
    if (index){
      this.todos.splice(index,1);
    }
  };
}
