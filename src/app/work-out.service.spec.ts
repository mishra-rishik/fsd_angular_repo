/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkOutService } from './work-out.service';

describe('WorkOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkOutService]
    });
  });

  it('should ...', inject([WorkOutService], (service: WorkOutService) => {
    expect(service).toBeTruthy();
  }));
});
