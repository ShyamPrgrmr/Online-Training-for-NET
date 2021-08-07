import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }

  password:string = "";

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.changePassword(this.password);
    this.router.navigate(["/"]);
  }

}
