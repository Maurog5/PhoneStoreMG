import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSaleComponent } from './successful-sale.component';

describe('SuccessfulSaleComponent', () => {
  let component: SuccessfulSaleComponent;
  let fixture: ComponentFixture<SuccessfulSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfulSaleComponent]
    });
    fixture = TestBed.createComponent(SuccessfulSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
