import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeYearComponent } from './programme-year.component';

describe('ProgrammeYearComponent', () => {
  let component: ProgrammeYearComponent;
  let fixture: ComponentFixture<ProgrammeYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
