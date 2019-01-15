import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromLangs from './langs.reducer';
import * as fromSnippets from './snippets.reducer';

export interface ApplicationState {
  authState: fromAuth.State;
  langsState: fromLangs.State;
  snippetsState: fromSnippets.State;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  authState: fromAuth.reducer,
  langsState: fromLangs.reducer,
  snippetsState: fromSnippets.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];

export const selectLangsState = createFeatureSelector<fromLangs.State>('langsState');
export const getLanguageOptions = createSelector(selectLangsState, fromLangs.getLanguageOptions);
export const getSavedLanguages = createSelector(selectLangsState, fromLangs.getSavedLanguages);
export const getCurrentLang = createSelector(selectLangsState, fromLangs.getCurrentLang);

export const selectSnippetsState = createFeatureSelector<fromSnippets.State>('snippetsState');
export const getLoadedSnippets = createSelector(selectSnippetsState, fromSnippets.getLoadedSnippets);
export const getSnippetsError = createSelector(selectSnippetsState, fromSnippets.getSnippetsError);
export const getSnippetsIsLoaded = createSelector(selectSnippetsState, fromSnippets.getSnippetsIsLoaded);

export const selectAuthState = createFeatureSelector<fromAuth.State>('authState');
export const getIsAuth = createSelector(selectAuthState, fromAuth.getIsAuth);
