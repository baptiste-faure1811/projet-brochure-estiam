import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Certification } from '../../services/certificationService/certification';
import { CertificationService } from '../../services/certificationService/certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  isAdmin = this.cookieService.get('isAdmin') ?? "false";
  certifications: Certification[] = [];

  constructor(private certificationService: CertificationService,private cookieService: CookieService) { }

  ngOnInit(): void {
 this.getCertifications();
  }


  getCertifications(): void {
    this.certificationService.getCertifications().subscribe(certifications => this.certifications = certifications

      )
  }
  
  deleteCertification(certification: Certification) {
    this.certificationService.deleteCertification(certification).subscribe();
  }
  


}