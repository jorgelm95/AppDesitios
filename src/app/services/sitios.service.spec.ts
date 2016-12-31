/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SitiosService } from './sitios.service';

describe('SitiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitiosService]
    });
  });

  it('should ...', inject([SitiosService], (service: SitiosService) => {
    expect(service).toBeTruthy();
  }));
});
