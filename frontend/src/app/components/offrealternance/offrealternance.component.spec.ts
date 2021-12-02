import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrealternanceComponent } from './offrealternance.component';

describe('OffrealternanceComponent', () => {
  let component: OffrealternanceComponent;
  let fixture: ComponentFixture<OffrealternanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffrealternanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrealternanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
