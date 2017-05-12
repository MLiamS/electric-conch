import { TestBed, inject } from '@angular/core/testing';

import { CastawayService } from './castaway.service';

describe('CastawayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CastawayService]
    });
  });

  it('should ...', inject([CastawayService], (service: CastawayService) => {
    expect(service).toBeTruthy();
  }));
});
