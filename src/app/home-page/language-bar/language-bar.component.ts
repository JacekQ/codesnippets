import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import {componentDestroyed} from '@w11k/ngx-componentdestroyed';

import * as fromStore from '../../store/reducers';
import * as langsActions from '../../store/actions/langs.actions';
import { AuthService } from '../../auth-page/services/auth.service';
import { Languages } from '../services/language-manager.service';
import { Langs } from '../models/langs.model';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit, OnDestroy {
  readonly headerText = 'Select a Language';

  isExpanded = false;

  @Output()
  languageSelected = new EventEmitter<Languages>();

  currentLang = '';
  currentLang$: Observable<string>;

  selectedLanguages: string[];
  selectedLanguages$: Observable<string[]>;

  languagesOptions: Langs[];
  languageOptions$: Observable<Langs[]>;

  isAuth$: Observable<boolean>;

  showModal = false;
  newSelection: string;

  constructor(private store: Store<fromStore.ApplicationState>, private authService: AuthService) { }

  ngOnInit() {
    this.languageOptions$ = this.store.select(fromStore.getLanguageOptions);
    this.currentLang$ = this.store.select(fromStore.getCurrentLang);
    this.selectedLanguages$ = this.store.select(fromStore.getSavedLanguages);
    this.isAuth$ = this.store.select(fromStore.getIsAuth);

    this.languageOptions$.pipe(
      takeUntil(componentDestroyed(this)))
      .subscribe(languages => this.languagesOptions = languages);
    this.currentLang$.pipe(
      takeUntil(componentDestroyed(this)))
      .subscribe(lang => this.currentLang = lang);
    this.selectedLanguages$.pipe(
      takeUntil(componentDestroyed(this)))
      .subscribe(langs => this.selectedLanguages = langs);
  }

  getLangName = (lang) => {
    return _.find(this.languagesOptions, {lang: lang}).name;
  }

  updateNewSelection = (lang) => {
    if (!this.isSaved(lang)) {
      this.newSelection = lang;
    }
  }

  updateSelectedLanguage = (lang: string) => {
    this.store.dispatch(new langsActions.SelectLang(lang));
    this.isExpanded = false;
  }

  isSaved = (lang) => {
    return _.find(this.selectedLanguages, {lang: lang});
  }

  saveLanguage = () => {
    const langObj = {
      lang: this.newSelection
    };
    this.store.dispatch(new langsActions.SaveLanguage(langObj));
    this.showModal = false;
  }

  onLogout = () => {
    this.authService.logout();
  }

  openModal = () => {
    this.showModal = true;
  }

  toggle = () => {
    this.isExpanded = !this.isExpanded;
  }

  ngOnDestroy() {}
}
