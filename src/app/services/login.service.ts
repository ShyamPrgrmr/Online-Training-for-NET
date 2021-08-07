import { Injectable } from '@angular/core';
import { usermodel } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  user:usermodel={
    name:"test user",
    mobile:"1234567890",
    password:"test",
    email:"test@123.com"
  }

  getUser(){
    return this.user;
  }

  changeUser(newUser:usermodel){
    this.user = newUser;
  }

  changePassword(password:string){
    let temp : usermodel = this.user;
    temp.password = password;
    this.user = temp;
  }
}
