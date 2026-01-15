import { Component, inject } from '@angular/core';
import { StudentService } from '../student-service';
import { Student } from '../../Models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Batch } from '../../Models/batch';
import { BatchService } from '../batch-service';

@Component({
  selector: 'app-student-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css',
})
export class StudentComponent {

  studentSvc: StudentService = inject(StudentService);
  batchSvc:BatchService =inject(BatchService);
  student: Student;
  students: Student[];
  batches:Batch[];
  errMsg: string;

  constructor() {
    this.student = new Student('', '', '', '');
    this.students = [];
    this.batches=[];
    this.errMsg = '';
    this.showAllStudents();
  }

  newStudent() {
    this.student = new Student('', '', '', '');
  }
  showAllBatches(){
    this.batchSvc.getAllBatches().subscribe({
      next:(response:any)=>{
        this.batches=response;
        this.errMsg="";
      },
      error:(err)=>this.errMsg=err.error
    })
  }
  showAllStudents() {
    this.studentSvc.getAllStudents().subscribe({
      next: (response: any) => {
        this.students = response;
        this.errMsg = '';
        this.showAllBatches();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  getStudent() {
    this.studentSvc.getStudent(this.student.rollNo).subscribe({
      next: (response: any) => {
        this.student = response;
        this.errMsg = '';
        this.showAllStudents();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }
  getStudentByBatch(){
    this.studentSvc.getStudentByBatch(this.student.batchCode).subscribe({
      next:(response:any)=>{
        this.students=response;
        this.errMsg="";
        this.showAllBatches();
      },
      error:(err)=>this.errMsg=err.error
    })
  }

  addStudent() {
    this.studentSvc.addStudent(this.student).subscribe({
      next: () => {
        alert('New Student Added!');
        this.errMsg = '';
        this.showAllStudents();
        this.newStudent();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  updateStudent() {
    this.studentSvc.updateStudent(this.student.rollNo, this.student).subscribe({
      next: () => {
        alert('Student Updated Successfully!');
        this.errMsg = '';
        this.showAllStudents();
        this.newStudent();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  deleteStudent() {
    this.studentSvc.deleteStudent(this.student.rollNo).subscribe({
      next: () => {
        alert('Student Deleted Successfully!');
        this.errMsg = '';
        this.showAllStudents();
        this.newStudent();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }
}
