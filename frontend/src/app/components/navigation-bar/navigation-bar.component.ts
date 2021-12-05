import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isAdmin = this.cookieService.get('isAdmin');

  constructor(
    private userService: UserService,
    private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  disconnectUser(): void {
      this.cookieService.set('isAdmin', "false");
      this.isAdmin = 'false';
      window.location.reload();
  }

}
