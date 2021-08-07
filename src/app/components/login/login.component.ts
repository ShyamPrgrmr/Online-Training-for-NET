import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usermodel } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }

  user !: usermodel;
  email:string = "";
  password:string = "";
  showError:boolean = false;

  ngOnInit(): void {
    this.getUserData()
  }


  getUserData(){
    this.user = this.loginService.getUser();    
  }


  login(){
    if(this.user.email === this.email && this.user.password === this.password)
      this.router.navigate(['/home']);
    else
      this.showError = true;
  }

}
