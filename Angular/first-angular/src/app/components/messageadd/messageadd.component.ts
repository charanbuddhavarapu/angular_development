import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messageadd',
  imports: [],
  templateUrl: './messageadd.component.html',
  styleUrl: './messageadd.component.css'
})
export class MessageaddComponent {
  constructor(private messageService: MessageService) { }

  sendMessage(message: string) {
    this.messageService.sendMessage(message)
  }
  clearMessage() {
    this.messageService.clearMessages();
  }

}
