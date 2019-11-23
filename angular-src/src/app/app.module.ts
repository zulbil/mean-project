import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';

import { ValidateService } from './services/validate/validate.service';
import { FlashMessagesModule  } from 'angular2-flash-messages';
import { AuthService } from './services/auth/auth.service';
import { AuthInterceptor } from './services/auth/auth-interceptor';
import { AuthGuardService } from './services/guard/authguard.service';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SidebarLeftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
