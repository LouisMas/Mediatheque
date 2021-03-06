import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from 'src/app/models/album.model';
import { HttpClient } from '@angular/common/http';


const apiUrlAlbum = environment.API_URL+"/albums";
@Injectable({
  providedIn: 'root'
})

export class AlbumHttpService  {

    constructor(private http:HttpClient) { 
  
    }
  
    findAll(){
      return this.http.get<Album[]>(apiUrlAlbum);
    }
  
    findById(id:number){
      return this.http.get<Album>(`${apiUrlAlbum}/${id}`);
    }
  
    save(album:Album){
      return this.http.post<Album>(apiUrlAlbum,album);
    }
  
    delete(id:number){
      return this.http.delete<Album>(`${apiUrlAlbum}/${id}`);
    }
  
  }