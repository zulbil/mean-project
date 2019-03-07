import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { FlashMessagesService   } from 'angular2-flash-messages';
import { AuthService } from './../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  router: Router;
  loginForm: FormGroup;
  email: string;
  password: string;
  isValid = true;

  constructor( private authService: AuthService, private flashMessage: FlashMessagesService ) { }

  ngOnInit() {
    this.formControlInit();
  }

  /* Login action  */
  onLogin() {
    if (this.loginForm.valid) {
      const user = {
        email:  this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.logUser(user).subscribe((result) => {
        if ( result.success ) {
          this.authService.storeUserData(result.token, result.data);
          this.flashMessage.show('Login Success', {cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['feed']);
        }
      });

    } else {
      this.flashMessage.show('Please provide valid information', {cssClass: 'alert-danger', timeout: 2000 });
    }
    this.loginForm.reset();
  }

  /*  Init Form Validation */
  formControlInit() {
    // tslint:disable-next-line:max-line-length
  const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  this.loginForm = new FormGroup({
    'email': new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern(emailPattern)
    ]),
    'password': new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  });
}
}
