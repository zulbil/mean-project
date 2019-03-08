import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/guard/authguard.service';

const routes: Routes = [
  {path: '', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'feed', component: PostsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
