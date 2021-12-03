import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodificationComponent } from './formmodification.component';

describe('FormmodificationComponent', () => {
  let component: FormmodificationComponent;
  let fixture: ComponentFixture<FormmodificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmodificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
