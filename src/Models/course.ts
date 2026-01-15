export class Course {
  courseCode: string;
  courseTitle: string;
  courseDuration: number;
  courseFee: number;

  constructor(
    courseCode: string = '',
    courseTitle: string = '',
    courseDuration: number = 0,
    courseFee: number = 0
  ) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.courseDuration = courseDuration;
    this.courseFee = courseFee;
  }
}
