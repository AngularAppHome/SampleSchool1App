import { TestBed, inject } from '@angular/core/testing';

import { StudentdataService } from './studentdata.service';

describe('StudentdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentdataService]
    });
  });

  it('should ...', inject([StudentdataService], (service: StudentdataService) => {
    expect(service).toBeTruthy();
  }));
});
