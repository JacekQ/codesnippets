import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { Langs } from '../models/langs.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageManagerService {

  constructor(private db: AngularFirestore) { }

  addSavedLang = (data) => {
    this.db.collection('savedlangs', ref => ref.where('lang', '==', data.lang)).valueChanges()
      .subscribe(existingVal => {
        if (existingVal.length === 0) {
          return this.db.collection('savedlangs').add({lang: data.lang});
        }
      });
  }

  fetchAllLangs = (): Observable<Langs[]> => {
    return this.db.collection('langs', ref => ref.orderBy('lang')).valueChanges() as Observable<Langs[]>;
  }

  fetchSavedLangs = (): Observable<string[]> => {
    return this.db.collection('savedlangs', ref => ref.orderBy('lang')).valueChanges() as Observable<string[]>;
  }
}


export enum Languages {
  angular = 'Angular',
  css = 'CSS',
  javascript = 'Javascript',
  html = 'HTML',
  react = 'React',
  sass = 'Sass',
  typescript = 'Typescript'
}
