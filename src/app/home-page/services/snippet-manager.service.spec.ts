import { TestBed } from '@angular/core/testing';

import { SnippetManagerService } from './snippet-manager.service';

describe('SnippetManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnippetManagerService = TestBed.get(SnippetManagerService);
    expect(service).toBeTruthy();
  });
});
