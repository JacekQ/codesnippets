import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';

import * as fromRoot from '../../store/reducers';
import * as authActions from '../../store/actions/auth.actions';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private store: Store<fromRoot.ApplicationState>, private router: Router) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new authActions.SetAuthenticated());
        this.router.navigate(['/']);
      } else {
        this.store.dispatch(new authActions.SetUnauthenticated());
        this.router.navigate(['/login']);
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(2000, result);
      })
      .catch(error => {
        console.log(2001, error);
      });
  }

  login(authData: AuthData) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(1000, result);
        return '';
      })
      .catch(error => {
        console.log(1001, error);
        return error.message;
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
