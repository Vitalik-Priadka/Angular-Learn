import {listToDo} from '@shared/mocks/data-todos';
import {Injectable} from "@angular/core";
import {Todo} from "@app-todo/shared/todo";

@Injectable()
export class TodoService {
  todos: Todo[] = listToDo;

  getTodos(){
    return this.todos;
  }

  createTodo(title: string){
    let todo = new Todo(title);
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    if(index >= 0){
      this.todos.splice(index,1);
    }
  }
  toggleTodo(todo: Todo){
    todo.completed = !todo.completed;
  }

  public get trace() {
    return console.debug.bind(console);
  }
}
