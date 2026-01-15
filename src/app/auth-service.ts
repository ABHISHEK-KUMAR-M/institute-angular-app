import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http:HttpClient=inject(HttpClient);
  baseUrl:string="https://institutewebapi-abhishek-dhdzdygngvcgg9gq.canadacentral-01.azurewebsites.net/api/Auth/";
  userName:string="ramesh@ey.com";
  role:string="Admin";
  userNameSignal = signal<string | null>(sessionStorage.getItem('userName'));
  secretKey:string="I am a Developer with maestro scooty.";
  getToken():Observable<string>{
    return this.http.get(this.baseUrl+this.userName+"/"+this.role+"/"+this.secretKey,{responseType:'text'});
  }

  setLogin(userName: string) {
    sessionStorage.setItem('userName', userName);
    this.userNameSignal.set(userName);
  }

  logout() {
    sessionStorage.clear();
    this.userNameSignal.set(null);
  }
}
