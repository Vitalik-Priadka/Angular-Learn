import { listToDo } from '../shared/data-todos';
import { Todo } from './todo';
import {HttpService} from "../shared/http.service";
import {environment} from "../../environments/environment";

export class TodoService {
  todos: Todo[] = listToDo;

  // constructor(private httpService: HttpService){}
  //
  // getListTodos(){
  //   this.httpService.get(environment.dataTodo);
  // }


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
