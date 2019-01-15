import {
  Component,
  EventEmitter,
  Input,
  Output,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ComponentRef,
} from '@angular/core';

import { Langs } from '../models/langs.model';
import { SimpleAlertViewComponent } from '../../shared/simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-snippet-adder',
  templateUrl: './snippet-adder.component.html',
  styleUrls: ['./snippet-adder.component.scss']
})
export class SnippetAdderComponent {
  @Input() lang: Langs;
  @Output() editSnippet = new EventEmitter<{}>();


  public alertModal: ComponentRef<SimpleAlertViewComponent> = null;
  @ViewChild('attention', { read: ViewContainerRef })
  alertContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  openModal = () => {
    if (!this.lang) {
      const alertFactory = this.resolver.resolveComponentFactory(
        SimpleAlertViewComponent
      );
      this.alertModal = this.alertContainer.createComponent(alertFactory);
      this.alertModal.instance.options = {
        title: 'Language information',
        message: 'Please select the Language first.',
        icon: 'exclamation',
        okText: 'OK',
      };
      this.alertModal.instance.okClicked.subscribe(() => {
        this.alertModal.destroy();
      });
      this.alertModal.instance.cancelClicked.subscribe(() => {
        this.alertModal.destroy();
      });

      this.alertModal.instance.show();
      return;
    }
    this.editSnippet.emit({lang: this.lang});
  }
}
