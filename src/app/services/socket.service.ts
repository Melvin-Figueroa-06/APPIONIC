import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: SocketIOClient.Socket;
  constructor() {
   
  }
  initialize(){
    //this.socket = io('http://localhost:8000/v1.0/api/chat');
  }

  online(username){
    this.socket.emit('online', username);
  }
}
