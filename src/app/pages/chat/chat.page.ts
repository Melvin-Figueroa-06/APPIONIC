import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SocketService } from '../../services/socket.service'



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  username: String;
  hideInput: boolean;

  contacts = [
    {
      name: 'Melvin',
      imgUri: 'https://scontent.flpb1-1.fna.fbcdn.net/v/t1.0-9/108857848_2814897928730214_2130901523088994998_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=lnBFBN-TLwoAX-HX5jL&_nc_ht=scontent.flpb1-1.fna&oh=c042ed1f5730598aeeeb409298eb4352&oe=5F74F3D9'
    }
  ]

  constructor(
      private socket: SocketService
  ) { }

  ngOnInit() {
  }

  hideInputField(){
    this.hideInput = true;
    this.setOnline(this.username);
  }
  setOnline(username){
   this.socket.online(username)
  }
 
}
