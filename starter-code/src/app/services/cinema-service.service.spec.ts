import { TestBed, inject } from '@angular/core/testing';

import { CinemaServiceService } from './cinema-service.service';

describe('CinemaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaServiceService]
    });
  });

  it('should be created', inject([CinemaServiceService], (service: CinemaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
