import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService, Message} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  value: string;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
        this.messages = this.messages.concat(val);
    });
  }
  sendMessage(){
    this.chatService.getBotAnswer(this.value);
  }

  scrollToBottom(){
    let toolbarChat = document.getElementById("chat-msg-area");
    toolbarChat.scrollTo(0, toolbarChat.scrollHeight);
    console.log("done!");
  }

}
