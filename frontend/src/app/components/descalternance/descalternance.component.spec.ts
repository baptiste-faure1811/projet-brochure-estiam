import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescalternanceComponent } from './descalternance.component';

describe('DescalternanceComponent', () => {
  let component: DescalternanceComponent;
  let fixture: ComponentFixture<DescalternanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescalternanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescalternanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
