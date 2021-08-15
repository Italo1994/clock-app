import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenZoneComponent } from './hidden-zone.component';

describe('HiddenZoneComponent', () => {
  let component: HiddenZoneComponent;
  let fixture: ComponentFixture<HiddenZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
