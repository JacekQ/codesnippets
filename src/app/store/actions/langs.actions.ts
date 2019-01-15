import { Action } from '@ngrx/store';
import { Langs, LangToSave } from '../../home-page/models/langs.model';

export enum LangActionTypes {
  LOAD_ALL_LANGS_ACTION = '[Langs] Load all available Langs',
  LOAD_SAVED_LANGS_ACTION = '[Langs] Load saved Langs',
  ALL_LANGS_LOADED_ACTION = '[Langs] All available Langs loaded',
  SAVED_LANGS_LOADED_ACTION = '[Langs] Saved Langs loaded',
  SELECT_LANG_ACTION = '[Langs] Select Lang',
  SAVE_LANGUAGE_ACTION = '[Langs] Save selected Lang',
}

export class LoadAllLangs implements Action {
  readonly type = LangActionTypes.LOAD_ALL_LANGS_ACTION;
}

export class LoadSelectedLangs implements Action {
  readonly type = LangActionTypes.LOAD_SAVED_LANGS_ACTION;
}

export class AllLangsLoaded implements Action {
  readonly type = LangActionTypes.ALL_LANGS_LOADED_ACTION;

  constructor(public payload: Langs[]) {}
}

export class SavedLangsLoaded implements Action {
  readonly type = LangActionTypes.SAVED_LANGS_LOADED_ACTION;

  constructor(public payload: string[]) {}
}

export class SelectLang implements Action {
  readonly type = LangActionTypes.SELECT_LANG_ACTION;

  constructor(public payload: string) {}
}

export class SaveLanguage implements Action {
  readonly type = LangActionTypes.SAVE_LANGUAGE_ACTION;

  constructor(public payload: LangToSave) {}
}

export type LangActions = LoadAllLangs | LoadSelectedLangs | AllLangsLoaded | SavedLangsLoaded | SelectLang | SaveLanguage;
