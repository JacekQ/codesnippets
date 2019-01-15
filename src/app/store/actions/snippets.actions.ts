import { Action } from '@ngrx/store';
import { Snippet, SnippetModel } from '../../home-page/models/snippet';

export enum SnippetsActionTypes {
  LOAD_SNIPPETS_ACTION = '[Snippets] Load Snippets',
  SNIPPETS_LOADED_ACTION = '[Snippets] Snippets for given Lang loaded',
  LOAD_SNIPPETS_ERROR_ACTION = '[Snippets] Error Loading Snippets',
  SAVE_SNIPPET_ACTION = '[Snippets] Save Snippet',
  EDIT_SNIPPET_ACTION = '[Snippets] Edit Snippet',
  REMOVE_SNIPPET_ACTION = '[Snippets] Remove Snippet'
}

export class LoadSnippets implements Action {
  readonly type = SnippetsActionTypes.LOAD_SNIPPETS_ACTION;

  constructor(public payload: string) {}
}

export class SnippetsLoaded implements Action {
  readonly type = SnippetsActionTypes.SNIPPETS_LOADED_ACTION;

  constructor(public payload: Snippet[]) {}
}

export class SnippetSave implements Action {
  readonly type = SnippetsActionTypes.SAVE_SNIPPET_ACTION;

  constructor(public payload: SnippetModel) {}
}

export class SnippetEdit implements Action {
  readonly type = SnippetsActionTypes.EDIT_SNIPPET_ACTION;

  constructor(public payload: SnippetModel) {}
}

export class SnippetRemove implements Action {
  readonly type = SnippetsActionTypes.REMOVE_SNIPPET_ACTION;

  constructor(public payload: string) {}
}

export class LoadSnippetsError implements Action {
  readonly type = SnippetsActionTypes.LOAD_SNIPPETS_ERROR_ACTION;

  constructor(public payload: string) {}
}

export type SnippetsActions = LoadSnippets | SnippetsLoaded | LoadSnippetsError | SnippetSave | SnippetRemove | SnippetEdit;
