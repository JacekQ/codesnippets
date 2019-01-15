import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import { Snippet, SnippetModel } from '../models/snippet';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-snippet-card',
  templateUrl: './snippet-card.component.html',
  styleUrls: ['./snippet-card.component.scss']
})
export class SnippetCardComponent implements OnInit {
  @Input() snippet: Snippet;
  @ViewChild('codeSnippet') codeSnippet: ElementRef;
  @Output() removeSnippet = new EventEmitter<SnippetModel>();
  @Output() editSnippet = new EventEmitter<SnippetModel>();

  isAuth$: Observable<boolean>;

  showModal = false;
  linkClicked = false;

  constructor(private highlightJsService: HighlightJsService, private store: Store<fromRoot.ApplicationState>) {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  ngOnInit() {}

  onDelete(snippet) {
    this.showModal = false;
    this.removeSnippet.emit(snippet);
  }

  onEdit(snippet) {
    this.showModal = false;
    this.editSnippet.emit(snippet);
  }

  openModal = () => {
    this.highlightJsService.highlight(this.codeSnippet.nativeElement);
    if (!this.linkClicked) {
      this.showModal = true;
    }
    this.linkClicked = false;
  }

  doNothing() {
    this.linkClicked = true;
  }
}
