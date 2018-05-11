/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkOutTransService } from './work-out-trans.service';

describe('WorkOutTransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkOutTransService]
    });
  });

  it('should ...', inject([WorkOutTransService], (service: WorkOutTransService) => {
    expect(service).toBeTruthy();
  }));
});
