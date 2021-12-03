import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent implements OnInit {

  id: String = this.route.snapshot.paramMap.get('errorID') as String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  checkCredentials(email: String, password: String): void {
    this.userService.checkUser(email, password).subscribe(response => {
      if (response.authentification == true) {
        this.router.navigateByUrl('/');
        this.cookieService.set('isAdmin', "true");
      } else {
        this.router.navigateByUrl('/admin-log-in/1');
        this.cookieService.set('isAdmin', "false");
      }
    },
    err => {
      this.router.navigateByUrl('/admin-log-in/1');
      this.cookieService.set('isAdmin', "false");
    })
  }

}
