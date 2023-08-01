import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerListComponent } from './patner-list.component';

describe('PatnerListComponent', () => {
  let component: PatnerListComponent;
  let fixture: ComponentFixture<PatnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
