import { TestBed } from '@angular/core/testing';

import { GetTokensService } from './get-tokens.service';

describe('GetTokensService', () => {
  let service: GetTokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
