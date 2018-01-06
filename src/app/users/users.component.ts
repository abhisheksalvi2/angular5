import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServercallService } from '../servercall.service'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users : any;  
  page = 1;
  constructor(private userlist: ServercallService) { }

  ngOnInit() {
  this.getusers();
  }
  
  getusers(): void {
    this.userlist.getusers().subscribe(users => {
        this.users = users},
        err => console.error(err),
     () => console.log('done loading user list'));
  }
}
