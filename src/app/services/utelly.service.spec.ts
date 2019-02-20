import { TestBed, inject } from '@angular/core/testing';

import { UtellyService } from './utelly.service';

describe('UtellyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtellyService]
    });
  });

  it('should be created', inject([UtellyService], (service: UtellyService) => {
    expect(service).toBeTruthy();
  }));
});
