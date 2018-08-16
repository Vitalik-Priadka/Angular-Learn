import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ChatService, Message} from "@app-chat/shared/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,AfterContentInit {
  toolbarChat;
  messages: Message[] = [];
  value: string;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
        this.messages = this.messages.concat(val);
    });
  }
  ngAfterContentInit() {
    this.toolbarChat = document.getElementById("chat-msg-area");
    console.log("init - done!");
  }

  sendMessage(){
    this.chatService.getBotAnswer(this.value);
  }

  scrollToBottom(){
    this.toolbarChat.scrollTo(0, this.toolbarChat.scrollHeight);
  }
}
