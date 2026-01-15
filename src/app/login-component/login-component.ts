import { Component, inject, signal, Signal } from '@angular/core';
import { LoginService } from '../login-service';
import { LoginUser } from '../../Models/LoginUser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-login-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  loginSvc:LoginService=inject(LoginService);
  authSvc:AuthService=inject(AuthService);
  user:LoginUser;
  router:Router=inject(Router);
  UserName:string;
  UserPassword:string;
  errMsg:string;
  constructor(){
    this.UserName="";
    this.UserPassword="";
    this.errMsg="";
    this.user=new LoginUser("","","");
  }
  login(){
    this.loginSvc.login(this.UserName,this.UserPassword).subscribe({
      next:(response:any)=>{
        this.user=response;
        this.authSvc.setLogin(this.user.userName);
        this.errMsg="";
        this.router.navigate(['']);
      },
      error:(err)=>this.errMsg=err.error
    })
  }
}
