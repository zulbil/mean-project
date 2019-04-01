import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth/auth.service';
import { AuthGuardService } from './../services/guard/authguard.service';

import { FlashMessagesService   } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display = false;
  constructor(
    private authService: AuthService,
    private authGard: AuthGuardService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    // this.flashMessage.show('You are logout', {cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/login']);
  }

  onClickActive() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

}
