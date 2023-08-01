import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBoComponent } from './commercial-bo.component';

describe('CommercialBoComponent', () => {
  let component: CommercialBoComponent;
  let fixture: ComponentFixture<CommercialBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialBoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
