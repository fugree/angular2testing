/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpconService } from './opcon.service';

describe('OpconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpconService]
    });
  });

  it('should ...', inject([OpconService], (service: OpconService) => {
    expect(service).toBeTruthy();
  }));
});
