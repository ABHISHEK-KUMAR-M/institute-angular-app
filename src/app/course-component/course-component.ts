import { Component, inject } from '@angular/core';
import { CourseService } from '../course-service';
import { Course } from '../../Models/course';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './course-component.html',
  styleUrl: './course-component.css',
})
export class CourseComponent {

  courseSvc: CourseService = inject(CourseService);
  course: Course;
  courses: Course[];
  errMsg: string;

  constructor() {
    this.course = new Course('', '', 0, 0);
    this.courses = [];
    this.errMsg = '';
    this.showAllCourses();
  }

  newCourse() {
    this.course = new Course('', '', 0, 0);
  }

  showAllCourses() {
    this.courseSvc.getAllCourses().subscribe({
      next: (response: any) => {
        this.courses = response;
        this.errMsg = '';
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  getCourse() {
    this.courseSvc.getCourse(this.course.courseCode).subscribe({
      next: (response: any) => {
        this.course = response;
        this.errMsg = '';
        this.showAllCourses();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  addCourse() {
    this.courseSvc.addCourse(this.course).subscribe({
      next: () => {
        alert('New Course Added!');
        this.errMsg = '';
        this.showAllCourses();
        this.newCourse();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  updateCourse() {
    this.courseSvc.updateCourse(this.course.courseCode, this.course).subscribe({
      next: () => {
        alert('Course Updated Successfully!');
        this.errMsg = '';
        this.showAllCourses();
        this.newCourse();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  deleteCourse() {
    this.courseSvc.deleteCourse(this.course.courseCode).subscribe({
      next: () => {
        alert('Course Deleted Successfully!');
        this.errMsg = '';
        this.showAllCourses();
        this.newCourse();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }
}