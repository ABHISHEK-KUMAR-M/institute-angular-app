import { Component, inject } from '@angular/core';
import { LoginUser } from '../../Models/LoginUser';
import { RegisterService } from '../register-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
registerSvc:RegisterService=inject(RegisterService);;
user:LoginUser;
errMsg:string;
constructor(){
  this.user=new LoginUser("","","dev");
  this.errMsg="";
}
 
register() {
    this.registerSvc.register(this.user).subscribe({
        next: (response: any) => {
            alert("New user registered");
            this.errMsg = "";
        },
        error: (err) => this.errMsg = err.message
    });
}
 
}
 