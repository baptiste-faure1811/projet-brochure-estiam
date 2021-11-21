import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammesPageComponent } from './programmes-page.component';

describe('ProgrammesPageComponent', () => {
  let component: ProgrammesPageComponent;
  let fixture: ComponentFixture<ProgrammesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
