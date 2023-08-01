import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCommercialBoComponent } from './register-commercial-bo.component';

describe('RegisterCommercialBoComponent', () => {
  let component: RegisterCommercialBoComponent;
  let fixture: ComponentFixture<RegisterCommercialBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCommercialBoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCommercialBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
