import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Film } from 'src/app/models/film.model';
import { AlbumHttpService } from 'src/app/services/album.service';
import { FilmHttpService } from 'src/app/services/film.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  films: Film[] = [];
  albums: Album[] = [];


  film:string="Film";
  album:string="Album";

   
  constructor(private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { 
    this.serviceFilm.findAll().subscribe((data)=> this.films =data);
    this.serviceAlbum.findAll().subscribe((data: Album[])=> this.albums=data);


}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}