import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCreationComponent } from './certification-creation.component';

describe('CertificationCreationComponent', () => {
  let component: CertificationCreationComponent;
  let fixture: ComponentFixture<CertificationCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
