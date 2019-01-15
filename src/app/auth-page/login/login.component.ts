import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { AuthData } from '../services/auth-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    // email: 'jacek.kujaszewski@infotex.com.pl'
    // password: 'Jacek1$'
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit({value, valid}: {value: AuthData, valid: boolean}) {
    if (valid) {
      this.authService.login(value).then(result => {
        if (result) {
          alert(result);
          this.loginForm.controls['email'].reset();
          this.loginForm.controls['password'].reset();
        }
      });
    }
  }
}
