import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  http:HttpClient=inject(HttpClient);
  token;
  baseUrl:string="https://institutewebapi-abhishek-dhdzdygngvcgg9gq.canadacentral-01.azurewebsites.net/api/Course/";
  httpOptions;
  constructor(){
    this.token=sessionStorage.getItem('token');
    this.httpOptions={
      headers:new HttpHeaders({
        'Authorization':'Bearer '+this.token
      })
    };
    this.getAllCourses();
  }
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl, this.httpOptions);
  }

  getCourse(courseCode: string): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + courseCode, this.httpOptions);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course, this.httpOptions);
  }

  updateCourse(courseCode: string, course: Course): Observable<Course> {
    return this.http.put<Course>(this.baseUrl + courseCode, course, this.httpOptions);
  }

  deleteCourse(courseCode: string): Observable<any> {
    return this.http.delete(this.baseUrl + courseCode, this.httpOptions);
  }

}
