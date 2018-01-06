import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServercallService {
  user_album_array = [];
  private user_list_url = 'https://jsonplaceholder.typicode.com/users';  // URL to web api
  private user_album_list_url = 'https://jsonplaceholder.typicode.com/users/';
  private user_album_images = 'https://jsonplaceholder.typicode.com/photos?';
      
  constructor(private http: HttpClient) { }
    
  getusers () {
    return this.http.get(this.user_list_url);
      
  }  
  
  getusersalbums(user_id : number){
    console.log(user_id)
    return this.http.get(this.user_album_list_url+user_id+'/albums');
  }
  
  getusersalbumsImages(album_id : number ,user_id : number){
    return this.http.get(this.user_album_images+user_id+'/albums'+'&_limit=5');
  }
    

}
