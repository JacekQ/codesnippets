import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import * as langsActions from '../actions/langs.actions';
import * as snippetsActions from '../actions/snippets.actions';
import { LanguageManagerService } from '../../home-page/services/language-manager.service';

@Injectable()
export class LangsEffects {

  constructor(private actions$: Actions, private languageManagerService: LanguageManagerService) {}

  @Effect()
  loadAllLangs$: Observable<Action> = this.actions$.pipe(
    ofType(langsActions.LangActionTypes.LOAD_ALL_LANGS_ACTION),
    mergeMap(() => {
      return this.languageManagerService.fetchAllLangs()
        .pipe(
          map(languages => new langsActions.AllLangsLoaded(languages))
        );
    })
  );

  @Effect()
  loadSavedLangs$: Observable<Action> = this.actions$.pipe(
    ofType(langsActions.LangActionTypes.LOAD_SAVED_LANGS_ACTION),
    mergeMap(() => {
      return this.languageManagerService.fetchSavedLangs()
        .pipe(
          map((languages) => new langsActions.SavedLangsLoaded(languages))
        );
    })
  );

  @Effect()
  selectLang$: Observable<Action> = this.actions$.ofType(langsActions.LangActionTypes.SELECT_LANG_ACTION).pipe(
    map((action: langsActions.SelectLang) => action.payload),
    map(payload => new snippetsActions.LoadSnippets(payload))
  );

  @Effect({dispatch: false})
  savedLang$ = this.actions$.ofType(langsActions.LangActionTypes.SAVE_LANGUAGE_ACTION).pipe(
    map((action: langsActions.SaveLanguage) => action.payload),
    map(payload => this.languageManagerService.addSavedLang(payload))
  );
}
