import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from "./home-component/home-component";
import { CourseComponent } from "./course-component/course-component";
import { BatchComponent } from "./batch-component/batch-component";
import { StudentComponent } from "./student-component/student-component";
import { AuthService } from './auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CourseComponent, BatchComponent, StudentComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('institute-app');
  auth=inject(AuthService);
  userName=signal(sessionStorage.getItem('userName'));
}
