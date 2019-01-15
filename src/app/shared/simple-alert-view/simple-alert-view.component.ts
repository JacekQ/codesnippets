import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Option {
  title: string;
  message: string;
  icon?: string;
  okText?: string;
  cancelText?: string;
  type?: string;
}

@Component({
  selector: 'app-simple-alert-view',
  templateUrl: './simple-alert-view.component.html',
  styleUrls: ['./simple-alert-view.component.scss']
})
export class SimpleAlertViewComponent implements OnInit {
  title: string;
  message: string;
  icon = 'exclamation';
  okText: string;
  cancelText: string;
  type = 'info';

  @Input() options: Option;
  @Output() okClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();

  public visible = true;

  constructor() {}

  ngOnInit() {
    this.type = this.options.type || 'info';
    this.title = this.options.title;
    this.message = this.options.message;
    this.okText = this.options.okText ? this.options.okText : 'OK';
      if (this.options.icon) {
        this.icon = this.options.icon;
      }
    this.cancelText = this.options.cancelText
      ? this.options.cancelText
      : 'Cancel';
  }

  onOk() {
    this.okClicked.emit();
    this.dismiss();
  }

  onCancel() {
    this.cancelClicked.emit();
    this.dismiss();
  }

  public dismiss() {
    this.visible = false;
  }

  public show() {
    this.visible = true;
  }
}
