import { Component, OnInit, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SnippetModel } from '../models/snippet';
import * as snippetsActions from '../../store/actions/snippets.actions';
import * as fromStore from '../../store/reducers';
import { SnippetFormComponent } from '../snippet-form/snippet-form.component';
import { SimpleAlertViewComponent } from '../../shared/simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {
  isLoadedSnippets$: Observable<boolean>;
  loadedSnippets$: Observable<SnippetModel[]>;
  currentLang$: Observable<string>;

  public snippetForm: ComponentRef<SnippetFormComponent> = null;
  @ViewChild('edit', { read: ViewContainerRef })
  formContainer: ViewContainerRef;

  public alertModal: ComponentRef<SimpleAlertViewComponent> = null;
  @ViewChild('alert', { read: ViewContainerRef })
  alertContainer: ViewContainerRef;

  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromStore.ApplicationState>,
    private resolver: ComponentFactoryResolver) {
      this.loadedSnippets$ = this.store.select(fromStore.getLoadedSnippets);
      this.isLoadedSnippets$ = this.store.select(fromStore.getSnippetsIsLoaded);
      this.currentLang$ = this.store.select(fromStore.getCurrentLang);
      this.isAuth$ = this.store.select(fromStore.getIsAuth);
  }

  ngOnInit() {}

  onEditSnippet(snippet) {
    const formFactory = this.resolver.resolveComponentFactory(
      SnippetFormComponent
    );
    this.snippetForm = this.formContainer.createComponent(formFactory);
    if (snippet) {
      this.snippetForm.instance.headerText = 'New Snippet';
    } else {
      this.snippetForm.instance.headerText = 'Edit Snippet';
    }
    this.snippetForm.instance.snippet = snippet;

    this.snippetForm.instance.formDismissed.subscribe(() => {
      this.snippetForm.destroy();
    });

    this.snippetForm.instance.show();
  }

  onRemoveSnippet(snippet) {
    const alertFactory = this.resolver.resolveComponentFactory(
      SimpleAlertViewComponent
    );
    this.alertModal = this.alertContainer.createComponent(alertFactory);
    this.alertModal.instance.options = {
      title: 'Remove Snippet',
      message: 'Are sure you want to remove the snippet?',
      icon: 'question',
      okText: 'Yes',
      cancelText: 'Cancel',
      type: 'confirm'
    };
    this.alertModal.instance.okClicked.subscribe(() => {
      this.store.dispatch(new snippetsActions.SnippetRemove(snippet.id));
      this.alertModal.destroy();
    });
    this.alertModal.instance.cancelClicked.subscribe(() => {
      this.alertModal.destroy();
    });

    this.alertModal.instance.show();
  }
}
