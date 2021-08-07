import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }

  email:string = "";
  password:string = "";
  name:string = "";
  mobile:string = "";
  showError:boolean = false;

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.loginService.changeUser(
      {
        email:this.email,
        password:this.password,
        name:this.name,
        mobile:this.mobile
      }
    );

    this.router.navigate(['/']);

  }

}
