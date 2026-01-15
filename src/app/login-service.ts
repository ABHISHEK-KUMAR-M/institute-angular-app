import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../Models/LoginUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient);

  baseUrl: string = "https://institutewebapi-abhishek-dhdzdygngvcgg9gq.canadacentral-01.azurewebsites.net/api/User/";

  login(username: string, password: string): Observable<LoginUser> {
    return this.http.get<LoginUser>(
      this.baseUrl + username + "/" + password
    );
  }
}
