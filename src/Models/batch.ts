export class Batch {
  batchCode: string;
  courseCode: string;
  startDate: Date;
  endDate: Date;

  constructor(
    batchCode: string = '',
    courseCode: string = '',
    startDate: Date = new Date(),
    endDate: Date = new Date()
  ) {
    this.batchCode = batchCode;
    this.courseCode = courseCode;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
