import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  takenusernames: string[] = [];
  takenemails: string[] = [];
  RegisterForm: FormGroup = new FormGroup({});
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getInfo();
    this.RegisterForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(6), this.checkUsername.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email, this.checkEmail.bind(this)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'Confirmpassword': new FormControl(null, [Validators.required, this.checkPasswords.bind(this)]),
      'gender': new FormControl(null, Validators.required),
      'Ageover18': new FormControl(null, Validators.required)
    });

  }

  onSubmit() {
    this.http.post('https://angularhulkgym-default-rtdb.firebaseio.com/Users.json', this.RegisterForm.value).subscribe(responseData => {
      console.log(responseData);
    });
    alert('Registered Successfully');
    this.RegisterForm.reset();
    this.router.navigate(['/Login']);
  }
  getInfo() {
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
          this.takenusernames.push(Data[d].username);
          this.takenemails.push(Data[d].email);
        }
      });
  }
  checkPasswords(ConfirmPassword: FormControl) {
    if (this.RegisterForm.get('password')?.value !== ConfirmPassword.value) {
      return { 'Notmatching': true };
    }
    return null;

  }
  checkUsername(Username: FormControl) {
    if (this.takenusernames.indexOf(Username.value) !== -1) {
      return { 'UsernameTaken': true };
    }
    return null;

  }

  checkEmail(Email: FormControl) {
    if (this.takenemails.indexOf(Email.value) !== -1) {
      return { 'EmailTaken': true };
    }
    return null;

  }


} 