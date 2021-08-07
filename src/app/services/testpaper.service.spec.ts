import { TestBed } from '@angular/core/testing';

import { TestpaperService } from './testpaper.service';

describe('TestpaperService', () => {
  let service: TestpaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestpaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
