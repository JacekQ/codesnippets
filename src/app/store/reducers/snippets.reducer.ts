import { Action } from '@ngrx/store';
import { SnippetModel } from '../../home-page/models/snippet';
import * as snippetsActions from '../actions/snippets.actions';
import * as _ from 'lodash';

export interface State {
  loadedSnippets: SnippetModel[];
  isLoaded: boolean;
  error: string;
}

export const initialState: State = {
  loadedSnippets: [],
  isLoaded: true,
  error: null
};

export function reducer(state = initialState, action: snippetsActions.SnippetsActions): State {
  switch (action.type) {
    case snippetsActions.SnippetsActionTypes.SNIPPETS_LOADED_ACTION:
      return {
        ...state,
        loadedSnippets: action.payload,
        isLoaded: true,
        error: null
      };

    case snippetsActions.SnippetsActionTypes.LOAD_SNIPPETS_ERROR_ACTION:
      return {
        ...state,
        error: action.payload
      };

    case snippetsActions.SnippetsActionTypes.LOAD_SNIPPETS_ACTION:
      return {
        ...state,
        isLoaded: false,
        error: null
      };

    case snippetsActions.SnippetsActionTypes.EDIT_SNIPPET_ACTION:
      const currSnippets = state.loadedSnippets.slice();
      const snippetIndex = _.findIndex(currSnippets, {'id': action.payload.id});
      currSnippets[snippetIndex] = action.payload;
      return {
          ...state,
          loadedSnippets: currSnippets
      };

    case snippetsActions.SnippetsActionTypes.REMOVE_SNIPPET_ACTION:
      const allSnippets = state.loadedSnippets.filter(snippet => snippet.id !== action.payload);
      return {
        ...state,
        loadedSnippets: allSnippets
      };

    default:
      return state;
  }
}

export const getLoadedSnippets = (state: State) => state.loadedSnippets;
export const getSnippetsError = (state: State) => state.error;
export const getSnippetsIsLoaded = (state: State) => state.isLoaded;
