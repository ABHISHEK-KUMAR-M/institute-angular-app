import { Component, inject } from '@angular/core';
import { BatchService } from '../batch-service';
import { Batch } from '../../Models/batch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course-service';
import { Course } from '../../Models/course';

@Component({
  selector: 'app-batch-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './batch-component.html',
  styleUrl: './batch-component.css',
})
export class BatchComponent {

  batchSvc: BatchService = inject(BatchService);
  courseSvc:CourseService = inject(CourseService)
  batch: Batch;
  batches: Batch[];
  errMsg: string;
  courses:Course[];

  constructor() {
    this.batch = new Batch('', '', new Date(), new Date());
    this.batches = [];
    this.courses=[];
    this.errMsg = '';
    this.showAllBatches();
  }

  newBatch() {
    this.batch = new Batch('', '', new Date(), new Date());
  }
  showAllCourses(){
    this.courseSvc.getAllCourses().subscribe({
      next:(response:any)=>{
        this.courses=response;
        this.errMsg="";
      },
      error:(err)=>this.errMsg=err.error
    }
    )
  }
  getBatchByCourse(){
    this.batchSvc.getBatchByCourse(this.batch.courseCode).subscribe({
      next:(response:any)=>{
        this.batches=response;
        this.errMsg="";
        this.showAllCourses();
      },
      error:(err)=>this.errMsg=err.error
    })
  }

  showAllBatches() {
    this.batchSvc.getAllBatches().subscribe({
      next: (response: any) => {
        this.batches = response;
        this.errMsg = '';
        this.showAllCourses();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  getBatch() {
    this.batchSvc.getBatch(this.batch.batchCode).subscribe({
      next: (response: any) => {
        this.batch = response;
        this.errMsg = '';
        this.showAllBatches();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  addBatch() {
    this.batchSvc.addBatch(this.batch).subscribe({
      next: () => {
        alert('New Batch Added!');
        this.errMsg = '';
        this.showAllBatches();
        this.newBatch();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  updateBatch() {
    this.batchSvc.updateBatch(this.batch.batchCode, this.batch).subscribe({
      next: () => {
        alert('Batch Updated Successfully!');
        this.errMsg = '';
        this.showAllBatches();
        this.newBatch();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }

  deleteBatch() {
    this.batchSvc.deleteBatch(this.batch.batchCode).subscribe({
      next: () => {
        alert('Batch Deleted Successfully!');
        this.errMsg = '';
        this.showAllBatches();
        this.newBatch();
      },
      error: (err) => (this.errMsg = err.error),
    });
  }
}