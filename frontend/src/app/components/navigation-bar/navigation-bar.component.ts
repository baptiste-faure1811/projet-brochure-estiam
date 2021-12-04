import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isAdmin:string;

  constructor(
    private userService: UserService,
    private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.cookieService.get('isAdmin');
    console.log("cookie : "+(typeof this.isAdmin))
  }

  disconnectUser(): void {
      window.location.reload();
      this.cookieService.set('isAdmin', "false");
  }

}
