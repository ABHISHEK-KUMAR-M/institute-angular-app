import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginUser } from '../Models/LoginUser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  http:HttpClient=inject(HttpClient);
  baseUrl:string ="https://institutewebapi-abhishek-dhdzdygngvcgg9gq.canadacentral-01.azurewebsites.net/api/User/";
  register(user:LoginUser):Observable<any>{
    return this.http.post<LoginUser>(this.baseUrl,user);
  }
}
