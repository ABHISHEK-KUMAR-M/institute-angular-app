import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CourseComponent } from './course-component/course-component';
import { BatchComponent } from './batch-component/batch-component';
import { StudentComponent } from './student-component/student-component';
import { RegisterComponent } from './register-component/register-component';
import { LoginComponent } from './login-component/login-component';
import { LogoutComponent } from './logout-component/logout-component';
import { userAccessGuard } from './user-access-guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Course',component:CourseComponent,canActivate:[userAccessGuard]},
    {path:'Batch',component:BatchComponent,canActivate:[userAccessGuard]},
    {path:'Student',component:StudentComponent,canActivate:[userAccessGuard]},
    {path:'Register',component:RegisterComponent},
    {path:'Login',component:LoginComponent},
    {path:'Logout',component:LogoutComponent,canActivate:[userAccessGuard]}
];
