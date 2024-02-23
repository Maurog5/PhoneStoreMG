import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStoreComponent } from './shoppingListcomponent';

describe('CarStoreComponent', () => {
  let component: CarStoreComponent;
  let fixture: ComponentFixture<CarStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarStoreComponent]
    });
    fixture = TestBed.createComponent(CarStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
