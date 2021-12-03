import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Programme } from '../../services/programmeService/programme';
import { ProgrammeService } from '../../services/programmeService/programme.service';

@Component({
  selector: 'app-programmes-page',
  templateUrl: './programmes-page.component.html',
  styleUrls: ['./programmes-page.component.css']
})
export class ProgrammesPageComponent implements OnInit {

  programmes: Programme[] = [];
  isAdmin = this.cookieService.get('isAdmin') ?? "false";

  constructor(private programmeService: ProgrammeService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getAllProgrammes();
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => this.programmes = programmes);
  }

}
