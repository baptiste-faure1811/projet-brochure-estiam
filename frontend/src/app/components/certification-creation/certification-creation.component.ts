import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificationService } from '../../services/certificationService/certification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-certification-creation',
  templateUrl: './certification-creation.component.html',
  styleUrls: ['./certification-creation.component.css']
})
export class CertificationCreationComponent implements OnInit {

  constructor(private certificationService: CertificationService,
    private location: Location,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
  }
   

  addCertification(name: string): void {
    this.certificationService.addCertification(name).subscribe();

  }

}
