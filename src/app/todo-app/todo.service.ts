import { listToDo } from '../shared/data-todos';
import { Todo } from './todo';
import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/index";

@Injectable()
export class TodoService {
  todos: Todo[] = listToDo;

  host: string;  //путь
  dataTodo: string;  //имя файла

  // constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer){
  //   // this.host = environment.host;
  //   // this.dataTodo = environment.dataTodo;
  //
  //   // this.dangerousUrl = 'javascript:alert("Hi there")';  Для безопасности
  //   // sanitizer.bypassSecurityTrustHtml(this.dangerousUrl);
  // }
  //
  // public getByObservable(url: string): Observable<any> {
  //   return this.httpClient.get(url);
  // }
  //
  // public getByPromise(url: string): Promise<any> {
  //   return this.httpClient.get(url).toPromise();
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

  public get trace() {
    return console.debug.bind(console);
  }
}
