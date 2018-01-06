import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServercallService } from '../servercall.service'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  user_id = 0;
  collectionsize = 0;
  closeResult: string;
  
  public user_album_array :any;
  page = 1;
  constructor(private route: ActivatedRoute,private user_album_list: ServercallService) {
    this.route.params.subscribe(user_id => this.user_id = (user_id.id));
    
  }

  ngOnInit() {
    this.getusersalbums();
  }
  
  getusersalbums(): void {
    this.user_album_list.getusersalbums(this.user_id).subscribe(user_album_array => {
        this.user_album_array = user_album_array},
        err => console.error(err),
     () => console.log('done loading user album list'));
  }
    
    
}
