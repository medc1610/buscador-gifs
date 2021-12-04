import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial() {
    return this.gifsservice.historial;
  }

  constructor(private gifsservice: GifsService) { }

  buscar(termino:string){
    this.gifsservice.buscarGifs(termino);
  }

  

}
