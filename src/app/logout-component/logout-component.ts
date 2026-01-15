import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-logout-component',
  imports: [],
  templateUrl: './logout-component.html',
  styleUrl: './logout-component.css',
})
export class LogoutComponent {
  auth = inject(AuthService);
  router:Router=inject(Router);
  constructor(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
