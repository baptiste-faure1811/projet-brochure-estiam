import { Component, OnInit } from '@angular/core';
import { Certification } from '../../services/certificationService/certification';
import { CertificationService } from '../../services/certificationService/certification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certification-modif',
  templateUrl: './certification-modif.component.html',
  styleUrls: ['./certification-modif.component.css']
})
export class CertificationModifComponent implements OnInit {

  constructor(private certificationServive: CertificationService,
    private route: ActivatedRoute) { }

    certifications: Certification [] = [];

  ngOnInit(): void {
    this.getCertifications();
  }

  getCertifications(): void {
    this.certificationServive.getCertifications().subscribe(certifications => this.certifications = certifications)
  }

  updateCertification(newName: string,  id: string) {

    console.log("NEW NAME : " + newName);
    console.log("ID TO EDIT : " + id);
    this.certificationServive.updateCertification(newName, id).subscribe();
  
}
}