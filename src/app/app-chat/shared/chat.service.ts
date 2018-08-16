import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

export class Message {
  constructor(public author: string, public content: string){}
}

@Injectable()
export class ChatService {
  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap = {
    "Hi": "Hello!",
    "Test": "And what?",
    "By": "Ohhh..",
    "How are you?": "Potato!",
    "Привет": "Добрый день!",
    "Как дела?": "Цвету и пахну..",
    "Кто ты?": "Я самый глупый бот.. Ведь я очень сильно ограничен:(",
    "default": "What?",
  };

  getBotAnswer(msg: string){
    const userMessage = new Message('user', msg,);
    this.conversation.next([userMessage]);

    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}
