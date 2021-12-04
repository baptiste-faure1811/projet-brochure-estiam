import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationModifComponent } from './certification-modif.component';

describe('CertificationModifComponent', () => {
  let component: CertificationModifComponent;
  let fixture: ComponentFixture<CertificationModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
