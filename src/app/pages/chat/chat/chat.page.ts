import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  img = '../../../../assets/chat/chat2.jpg';
  @ViewChild('content') content: IonContent;
  @ViewChild('chat_input') messageInput: ElementRef;
  User = 'Me';
  toUser = 'driver';
  inpText: any;
  editorMsg = '';
  showEmojiPicker = false;
  msgList: Array<{
    userId: any,
    userName: any,
    userAvatar: any,
    time: any,
    message: any,
    upertext: any;
  }>;
  private events;
  public count = 0;
  public arr = [
    {
      messageId: '1',
      userId: '140000198202211138',
      userName: 'Luff',
      userImgUrl: './assets/user.jpg',
      toUserId: '210000198410281948',
      toUserName: 'Hancock',
      userAvatar: './assets/to-user.jpg',
      time: 1488349800000,
      message: 'Hey, that\'s an awesome chat UI',
      status: 'success'

    },
    {
      messageId: '2',
      userId: '210000198410281948',
      userName: 'Hancock',
      userImgUrl: './assets/to-user.jpg',
      toUserId: '140000198202211138',
      toUserName: 'Luff',
      userAvatar: './assets/user.jpg',
      time: 1491034800000,
      message: 'Right, it totally blew my mind. They have other great apps and designs too !',
      status: 'success'
    },
    {
      messageId: '3',
      userId: '140000198202211138',
      userName: 'Luff',
      userImgUrl: './assets/user.jpg',
      toUserId: '210000198410281948',
      toUserName: 'Hancock',
      userAvatar: './assets/to-user.jpg',
      time: 1491034920000,
      message: 'And it is free ?',
      status: 'success'
    },
    {
      messageId: '4',
      userId: '210000198410281948',
      userName: 'Hancock',
      userImgUrl: './assets/to-user.jpg',
      toUserId: '140000198202211138',
      toUserName: 'Luff',
      userAvatar: './assets/user.jpg',
      time: 1491036720000,
      message: 'Yes, totally free. Beat that ! ',
      status: 'success'
    },
    {
      messageId: '5',
      userId: '210000198410281948',
      userName: 'Hancock',
      userImgUrl: './assets/to-user.jpg',
      toUserId: '140000198202211138',
      toUserName: 'Luff',
      userAvatar: './assets/user.jpg',
      time: 1491108720000,
      message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
      status: 'success'
    },
    {
      messageId: '6',
      userId: '140000198202211138',
      userName: 'Luff',
      userImgUrl: './assets/user.jpg',
      toUserId: '210000198410281948',
      toUserName: 'Hancock',
      userAvatar: './assets/to-user.jpg',
      time: 1491231120000,
      message: 'Check out their other designs.',
      status: 'success'
    }
  ];

  constructor(private actRoute: ActivatedRoute, public actionSheetController: ActionSheetController) {
    this.msgList = [
      {
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/driver.jpeg',
        time: '12:01 pm',
        message: 'Hey, that\'s an awesome chat UI',
        upertext: 'Hello'
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/user.jpeg',
        time: '12:01 pm',
        message: 'Right, it totally blew my mind. They have other great apps and designs too!',
        upertext: 'Hii'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/driver.jpeg',
        time: '12:01 pm',
        message: 'And it is free ?',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/user.jpeg',
        time: '12:01 pm',
        message: 'Yes, totally free. Beat that !',
        upertext: 'good'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/driver.jpeg',
        time: '12:01 pm',
        message: 'Wow, that\'s so cool. Hats off to the developers. This is good stuff',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/user.jpeg',
        time: '12:01 pm',
        message: 'Check out their other designs.',
        upertext: 'good'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/driver.jpeg',
        time: '12:01 pm',
        // tslint:disable-next-line:max-line-length
        message: 'Have you seen their other apps ? They have a collection of ready-made apps for developers. This makes my life so easy. I love it! ',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/user.jpeg',
        time: '12:01 pm',
        message: 'Well, good things come in small package after all',
        upertext: 'good'
      },
    ];

  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }

  ionViewWillLeave() {
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    console.log('scrollBottom');
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
    console.log('scrollBottom2');
  }

  logScrollStart() {
    console.log('logScrollStart');
    document.getElementById('chat-parent');
  }

  logScrolling(event) {
    console.log('event', event);
  }


  async addFile() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add a',
      buttons: [{
        text: 'Picture',
        icon: 'image-sharp',
        handler: () => {
        }
      }, {
        text: 'Document',
        icon: 'document-text',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }



  ngOnInit() {
    const id = this.actRoute.snapshot.params.id;
  }

}
