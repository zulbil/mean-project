import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from './../classes/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = null ;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUserConnected();
  }

  getProfile () {
    this.authService.getUserProfile()
                    .subscribe((data) => {
                      this.user = data;
                      console.log(this.user);
                    }, (err) => console.log(err))
  }


}
