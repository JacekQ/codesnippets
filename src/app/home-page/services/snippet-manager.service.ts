import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnippetManagerService {
  private SNIPPET_STORAGE_KEY = 'code-snippets.saved_snippets';
  private baseSnippetsPath = '/snippets';

  constructor(private db: AngularFirestore ) { }

  fetchSnippets = (data: string): Observable<any> => {
    return this.db.collection('snippets', ref => ref.where('lang', '==', data).orderBy('title'))
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
             id: doc.payload.doc.id,
             ...doc.payload.doc.data()
            };
          });
        }));
  }

  removeSnippet = (data) => {
    return this.db.doc(`snippets/${data}`).delete().catch(error => console.log('Error removing snippet:', error));
  }

  editSnippet = (data) => {
    const snippet = _.omit(data, 'id');
    return this.db.doc(`snippets/${data.id}`).update(snippet).catch(error => console.log('Error modifying snippet:', error));
  }

  addSnippet = (data) => {
    const snippet = _.omit(data, 'id');
    return this.db.collection('snippets').add(snippet).then(() => data.lang);
  }
}
