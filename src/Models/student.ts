export class Student {
  rollNo: string;
  studentName: string;
  batchCode: string;
  studentAddress: string;

  constructor(
    rollNo: string = '',
    studentName: string = '',
    batchCode: string = '',
    studentAddress: string = ''
  ) {
    this.rollNo = rollNo;
    this.studentName = studentName;
    this.batchCode = batchCode;
    this.studentAddress = studentAddress;
  }
}
