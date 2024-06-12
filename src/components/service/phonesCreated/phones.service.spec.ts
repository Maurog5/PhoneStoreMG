/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhonesService } from './phones.service';

describe('Service: Phones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonesService]
    });
  });

  it('should ...', inject([PhonesService], (service: PhonesService) => {
    expect(service).toBeTruthy();
  }));
});
