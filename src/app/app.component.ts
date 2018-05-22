import { Component } from '@angular/core';

// Декоратор
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleApp: string = 'Welcome to Vilatik First App!';
  versionApp: number = 0.4;

  links = [
    {path: '/main', label: 'Главная', active: 'button-active'},
    {path: '/chat', label: 'Чат', active: 'button-active'},
    {path: '/todo', label: 'Дела', active: 'button-active'}
  ]
}
