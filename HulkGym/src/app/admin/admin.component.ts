import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {User} from '../Shared/model/user.model'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:User[]=[];
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
   this.FetchUsers()
  }

  FetchUsers() {
    this.http.get<Body>('https://angularhulkgym-default-rtdb.firebaseio.com/Users.json')
      .pipe(
        map((ResponseData: any) => {
          const postArray = [];
          for (const key in ResponseData) {
            if (ResponseData.hasOwnProperty(key)) {
              postArray.push({ ...ResponseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe(Data => {
        for (let d in Data) {
          
          this.users.push(new User(Data[d].username,Data[d].email,Data[d].gender))
        }
      });
  }
}
