import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

 
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
   
  ) { 
    console.log(route.snapshot.paramMap.get('userId'));
    
  }

  ngOnInit() {
  }

}
