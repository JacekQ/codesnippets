import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import * as snippetsActions from '../actions/snippets.actions';
import { SnippetManagerService } from '../../home-page/services/snippet-manager.service';

@Injectable()
export class SnippetsEffects {

  constructor(private actions$: Actions, private snippetManagerService: SnippetManagerService) {}

  @Effect()
  loadSnippets$: Observable<Action> = this.actions$.ofType(snippetsActions.SnippetsActionTypes.LOAD_SNIPPETS_ACTION).pipe(
    map((action: snippetsActions.LoadSnippets) => action.payload),
    switchMap((payload) => {
      return this.snippetManagerService.fetchSnippets(payload)
      .pipe(
        map(snippets => new snippetsActions.SnippetsLoaded(snippets))
      );
    })
  );

  @Effect({dispatch: false})
  saveSnippet$ = this.actions$.ofType(snippetsActions.SnippetsActionTypes.SAVE_SNIPPET_ACTION).pipe(
    map((action: snippetsActions.SnippetSave) => action.payload),
    map(payload => this.snippetManagerService.addSnippet(payload))
  );

  @Effect({dispatch: false})
  editSnippet$ = this.actions$.ofType(snippetsActions.SnippetsActionTypes.EDIT_SNIPPET_ACTION).pipe(
    map((action: snippetsActions.SnippetEdit) => action.payload),
    map(payload => this.snippetManagerService.editSnippet(payload))
  );

  @Effect({dispatch: false})
  removeSnippet$ = this.actions$.ofType(snippetsActions.SnippetsActionTypes.REMOVE_SNIPPET_ACTION).pipe(
    map((action: snippetsActions.SnippetSave) => action.payload),
    map(payload => this.snippetManagerService.removeSnippet(payload))
  );
}
