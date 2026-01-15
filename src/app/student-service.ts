import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  http: HttpClient = inject(HttpClient);
  token: string | null;
  baseUrl: string = 'https://institutewebapi-abhishek-dhdzdygngvcgg9gq.canadacentral-01.azurewebsites.net/api/Student/';
  httpOptions;

  constructor() {
    this.token = sessionStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };
    this.getAllStudents();
  }


  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl, this.httpOptions);
  }


  getStudent(rollNo: string): Observable<Student> {
    return this.http.get<Student>(this.baseUrl + rollNo, this.httpOptions);
  }
  getStudentByBatch(batchCode:string):Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl+"bybatch/"+batchCode,this.httpOptions);
  }
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student, this.httpOptions);
  }

  updateStudent(rollNo: string, student: Student): Observable<Student> {
    return this.http.put<Student>(this.baseUrl + rollNo, student, this.httpOptions);
  }

  deleteStudent(rollNo: string): Observable<any> {
    return this.http.delete(this.baseUrl + rollNo, this.httpOptions);
  }
}
