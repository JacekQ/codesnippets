import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SnippetModel } from '../models/snippet';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.scss']
})
export class SnippetFormComponent implements OnInit {
  showModal = false;
  @Input() snippet: SnippetModel | {};
  @Input() headerText: string;
  @Output() formDismissed = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public show() {
    this.showModal = true;
  }

  public hide() {
    this.showModal = false;
    this.formDismissed.emit();
  }
}
