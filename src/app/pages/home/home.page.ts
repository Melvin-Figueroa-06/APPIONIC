import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private appPages =[
    {
      title: 'Inicio',
      url: '/homeproduct',
      icon: 'home'
    },
    {
      title: 'Mi Perfil',
      url: '/miperfil',
      icon: 'home'
    },
    {
      title: 'Categorias',
      url: '/category',
      icon: 'home'
    },
    {
      title: 'Mis Favoritos',
      url: '/favorites',
      icon: 'heart'
    },
    {
      title: 'A cerca de',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Salir',
      icon: 'home'
    },
  ]

  constructor( ) { 
    
  }

  ngOnInit() {
  }


}
