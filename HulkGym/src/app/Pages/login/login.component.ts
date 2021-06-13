import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  HulkIcon = "../../../assets/Pictures/logo.png";
  LoginForm: FormGroup = new FormGroup({});
  inCorrectInfo!: boolean;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
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
          if (Data[d].username == this.LoginForm.get('username')!.value && Data[d].password == this.LoginForm.get('password')!.value) {
            this.inCorrectInfo = false;
            this.router.navigate(['/User', d, Data[d].username]);
            this.LoginForm.reset();
            break;
          }
          else {
            this.inCorrectInfo = true;

          }
        }
      });
  }

}