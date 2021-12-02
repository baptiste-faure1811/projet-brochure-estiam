import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuddescComponent } from './cuddesc.component';

describe('CuddescComponent', () => {
  let component: CuddescComponent;
  let fixture: ComponentFixture<CuddescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuddescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuddescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
