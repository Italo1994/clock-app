import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClockComponent } from './area-clock.component';

describe('AreaClockComponent', () => {
  let component: AreaClockComponent;
  let fixture: ComponentFixture<AreaClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
