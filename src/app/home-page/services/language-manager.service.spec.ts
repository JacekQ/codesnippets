import { TestBed } from '@angular/core/testing';

import { LanguageManagerService } from './language-manager.service';

describe('LanguageManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageManagerService = TestBed.get(LanguageManagerService);
    expect(service).toBeTruthy();
  });
});
