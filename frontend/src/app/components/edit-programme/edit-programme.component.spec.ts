import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgrammeComponent } from './edit-programme.component';

describe('EditProgrammeComponent', () => {
  let component: EditProgrammeComponent;
  let fixture: ComponentFixture<EditProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
