import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaApiComponent } from './area-api.component';

describe('AreaApiComponent', () => {
  let component: AreaApiComponent;
  let fixture: ComponentFixture<AreaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
