import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommercialBoComponent } from './list-commercial-bo.component';

describe('ListCommercialBoComponent', () => {
  let component: ListCommercialBoComponent;
  let fixture: ComponentFixture<ListCommercialBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommercialBoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommercialBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
