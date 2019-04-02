import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';

import { ValidateService } from './../services/validate/validate.service';
import { FlashMessagesService   } from 'angular2-flash-messages';
import { AuthService } from './../services/auth/auth.service';

import { User } from '../classes/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  user: User = {
    _id: null,
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private _authService: AuthService,
    private validate: ValidateService
  ) { }

  ngOnInit() {
    this.formControlInit();
  }

  onSubmit() {
    this.user.firstname = this.signupForm.value.firstname;
    this.user.lastname  = this.signupForm.value.lastname;
    this.user.username  = this.signupForm.value.username;
    this.user.email     = this.signupForm.value.email;
    this.user.password  = this.signupForm.value.password;

    // Register User
    if (this.signupForm.valid && this.validate.validateRegister(this.user) ) {
      this._authService.registerUser(this.user).subscribe((user) => {
        if (user) {
          this._flashMessagesService.show('You are now registered and you can log in', {cssClass: 'alert-success', timeout: 2000 });
        }
      });

      this.signupForm.reset();
    } else {
      this._flashMessagesService.show('Please provide valid information', {cssClass: 'alert-danger', timeout: 2000 });
    }
  }

  formControlInit() {
      // tslint:disable-next-line:max-line-length
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern = /^[a-z0-9]+$/;

    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      'lastname':  new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      'username': new FormControl(null , Validators.required),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(emailPattern)
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(passwordPattern)
      ])
    });
  }
}
