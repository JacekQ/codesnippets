import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SnippetsEffects } from './snippets.effects';

describe('SnippetsEffects', () => {
  let actions$: Observable<any>;
  let effects: SnippetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SnippetsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SnippetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
