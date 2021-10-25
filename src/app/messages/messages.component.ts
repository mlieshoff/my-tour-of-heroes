import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  hasMessages(): boolean {
    return this.messageService.messages.length > 0;
  }

  getMessages(): String[] {
    return this.messageService.messages;
  }

  clear() {
    this.messageService.clear();
  }

}
