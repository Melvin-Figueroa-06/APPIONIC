import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homechat',
  templateUrl: './homechat.page.html',
  styleUrls: ['./homechat.page.scss'],
})
export class HomechatPage implements OnInit {

  chatData = [{
    id: '12edd', name: 'Jovenica Alba',
    image: '../../assets/chat/chat1.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    count: '2',
    time: '12:17'
  }, {
    id: '12edd', name: 'Oliver',
    image: ' ../../assets/chat/chat2.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: '12:17'
  }, {
    id: '12edd', name: 'George',
    image: ' ../../assets/chat/chat3.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    count: '2',
    time: 'Yesterday'
  }, {
    id: '12edd', name: 'Harry',
    image: ' ../../assets/chat/chat4.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: 'Sunday'
  }, {
    id: '12edd', name: 'Jack',
    image: ' ../../assets/chat/chat5.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

    time: '11:15'
  }, {
    id: '12edd', name: 'Jacob',
    image: ' ../../assets/chat/chat6.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    count: '1',
    time: 'Yesterday'
  }, {
    id: '12edd', name: 'Noah',
    image: ' ../../assets/chat/chat7.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: 'Monday'
  }, {
    id: '12edd', name: 'Charlie',
    image: ' ../../assets/chat/chat8.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    count: '6',
    time: '07:00'
  }, {
    id: '12edd', name: 'Logan',
    image: ' ../../assets/chat/chat1.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: 'Yesterday'
  }, {
    id: '12edd', name: 'Harrison',
    image: ' ../../assets/chat/chat2.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

    time: 'Yesterday'
  }, {
    id: '12edd', name: 'Sebastian',
    image: ' ../../assets/chat/chat3.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

    time: 'Yesterday'
  }, {
    id: '12edd', name: 'Zachary',
    image: ' ../../assets/chat/chat4.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: 'Today'
  }, {
    id: '12edd', name: 'Elijah',
    image: ' ../../assets/chat/chat5.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: '18:25'
  }
  ];


  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }

  openProfile() {
    this.route.navigate(['\profil']);
  }

  onShow(chat) {
    this.route.navigate(['bubble', chat]);
  }
}
