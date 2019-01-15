import { Languages } from '../services/language-manager.service';

export interface SnippetModel {
  id:    string;
  code:  string;
  desc:  string;
  lang:  string;
  title: string;
  url:   string;
}

export class Snippet {
  private _id: string;
  private _code: string;
  private _desc: string;
  private _lang: Languages;
  private _title: string;
  private _url: string;

  get title(): string {
    return this._title;
  }

  get desc(): string {
    return this._desc;
  }

  get code(): string {
    return this._code;
  }

  get lang(): Languages {
    return this._lang;
  }

  get url(): string {
    return this._url;
  }

  get id(): string {
    return this._id;
  }

  constructor(title: string, desc: string, code: string, lang: Languages, id: string, url: string) {
    this._id = id;
    this._code = code;
    this._desc = desc;
    this._lang = lang;
    this._title = title;
    this._url = url;
  }
}
