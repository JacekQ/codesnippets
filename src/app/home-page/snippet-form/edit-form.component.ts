import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SnippetModel } from '../models/snippet';
import { Store } from '@ngrx/store';

import * as snippetsActions from '../../store/actions/snippets.actions';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  snippetForm: FormGroup;

  @Input() snippet: SnippetModel;
  @Output() formClosed = new EventEmitter<void>();

  new = true;
  id: string;
  lang: string;

  constructor(private fb: FormBuilder, private store: Store<fromStore.ApplicationState>) {}

  ngOnInit() {
    if (this.snippet.id) {
      this.new = false;
    }
    this.id = this.snippet.id || '';
    this.lang = this.snippet.lang || '';

    this.snippetForm = this.fb.group({
      title: [this.snippet.title || '', [Validators.required]],
      desc: [this.snippet.desc || '', [Validators.required]],
      code: [this.snippet.code || '', [Validators.required]],
      url: [this.snippet.url || ''],
    });
  }

  saveSnippet = ({value, valid}: {value, valid: boolean}) => {
    console.log(444, value, valid);
    if (valid) {
      const snippet = {
        ...value,
        id: this.id,
        lang: this.lang,
      };

      if (this.new) {
        this.store.dispatch(new snippetsActions.SnippetSave(snippet));
      } else {
        this.store.dispatch(new snippetsActions.SnippetEdit(snippet));
      }
      this.formClosed.emit();
    }
  }
}
