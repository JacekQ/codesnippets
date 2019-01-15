import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as langsActions from './store/actions/langs.actions';
import { AuthService } from './auth-page/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-snipets';

  constructor(private store: Store<fromRoot.ApplicationState>, private authService: AuthService) {
  }

  ngOnInit() {
    this.store.dispatch(new langsActions.LoadAllLangs());
    this.store.dispatch(new langsActions.LoadSelectedLangs());
    this.authService.initAuthListener();
  }
}
