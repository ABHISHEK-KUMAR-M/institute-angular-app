import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from '../Models/batch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BatchService {

  http: HttpClient = inject(HttpClient);
  token;
  baseUrl: string = 'https://institutewebapi-abhishek-dhdzdygngvcgg9gq.canadacentral-01.azurewebsites.net/api/Batch/';
  httpOptions;

  constructor() {
    this.token = sessionStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };
    this.getAllBatches();
  }

  getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.baseUrl, this.httpOptions);
  }
  getBatchByCourse(courseCode:string): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.baseUrl+"bycourse/"+courseCode, this.httpOptions);
  }

  getBatch(batchCode: string): Observable<Batch> {
    return this.http.get<Batch>(this.baseUrl + batchCode, this.httpOptions);
  }


  addBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(this.baseUrl, batch, this.httpOptions);
  }


  updateBatch(batchCode: string, batch: Batch): Observable<Batch> {
    return this.http.put<Batch>(this.baseUrl + batchCode, batch, this.httpOptions);
  }

  deleteBatch(batchCode: string): Observable<any> {
    return this.http.delete(this.baseUrl + batchCode, this.httpOptions);
  }
}