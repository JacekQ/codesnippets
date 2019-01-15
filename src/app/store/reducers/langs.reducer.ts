import { Action } from '@ngrx/store';
import { Langs } from '../../home-page/models/langs.model';
import * as langsActions from '../actions/langs.actions';


export interface State {
  languageOptions: Langs[];
  savedLanguages: string[];
  currentLang: string;
}

export const initialState: State = {
  languageOptions: [],
  savedLanguages: [],
  currentLang: ''
};

export function reducer(state = initialState, action: langsActions.LangActions): State {
  switch (action.type) {
    case langsActions.LangActionTypes.ALL_LANGS_LOADED_ACTION:
      return {
        ...state,
        languageOptions: action.payload
      };

    case langsActions.LangActionTypes.SAVED_LANGS_LOADED_ACTION:
      return {
        ...state,
        savedLanguages: action.payload
      };

    case langsActions.LangActionTypes.SELECT_LANG_ACTION:
      const newStateS = {
        ...state,
        currentLang: action.payload
      };
      return newStateS;

    default:
      return state;
  }
}

export const getLanguageOptions = (state: State) => state.languageOptions;
export const getSavedLanguages = (state: State) => state.savedLanguages;
export const getCurrentLang = (state: State) => state.currentLang;
