import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LangsEffects } from './langs.effects';

describe('LangsEffects', () => {
  let actions$: Observable<any>;
  let effects: LangsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LangsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LangsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
