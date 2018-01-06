import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServercallService } from '../servercall.service'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-album-images',
  templateUrl: './user-album-images.component.html',
  styleUrls: ['./user-album-images.component.css']
})
export class UserAlbumImagesComponent implements OnInit {
  user_id = 0;
  album_id = 0
  public user_album_images_array :any;  
  constructor(private route: ActivatedRoute,private user_album_list: ServercallService) {
    this.route.params.subscribe(album_id => this.album_id = (album_id.id));
    this.route.params.subscribe(user_id => this.user_id = (user_id.user_id));
    
   }

  ngOnInit() {
    this.getusersalbumsImages();
  }
    
  getusersalbumsImages(): void {
    this.user_album_list.getusersalbumsImages(this.album_id,this.user_id).subscribe(user_album_images_array => {
        this.user_album_images_array = user_album_images_array},
        err => console.error(err),
     () => console.log('done loading user album images'));
  }  
}
