import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordStatComponent } from './dashbord-stat.component';

describe('DashbordStatComponent', () => {
  let component: DashbordStatComponent;
  let fixture: ComponentFixture<DashbordStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
