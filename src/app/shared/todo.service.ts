import { listToDo } from './data';
import { Todo } from './todo';

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

}
