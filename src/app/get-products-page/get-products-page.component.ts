import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumHttpService } from '../../services/album/album.service';
import { FilmHttpService } from '../../services/film/film.service';

@Component({
  selector: 'app-get-products-page',
  templateUrl: './get-products-page.component.html',
  styleUrls: ['./get-products-page.component.scss']
})
export class GetProductsPageComponent implements OnInit {

  data! : any;

  
  typeProduit:string="Film";

  constructor(private route:ActivatedRoute,private router:Router,private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { }

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('type') == "Film"){
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.serviceFilm.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
        
    }
    else{
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.serviceAlbum.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
    }

  }

}

