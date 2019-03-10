import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any; 
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getProfile(); 
  }

  getProfile () {
    this.authService.getUserProfile()
                    .subscribe((data)=> {
                      this.user = data; 
                    }, (err) => console.log(err))
  }


}
