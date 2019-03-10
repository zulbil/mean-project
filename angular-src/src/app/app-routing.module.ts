import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/guard/authguard.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/feed', pathMatch: 'full' },
  {path: 'signup', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {path: 'feed', component: PostsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
