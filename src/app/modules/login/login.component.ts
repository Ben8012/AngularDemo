import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FLogin } from './forms/login.form';
import { SessionService } from '../../modules/security/services/session.service';
import { AuthService } from '../../modules/security/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private formLogin: FormGroup = FLogin();

  get FormLogin(): FormGroup { return this.formLogin; }

  constructor(
     private $auth: AuthService,
     private $route : Router
     ) { }

  handleSubmitAction(){
    if (this.formLogin.valid) {
      const {email, password} = this.formLogin.value;
      this.$auth.login({email, password});
      this.$route.navigate(["/home"]);
    }
  }

}
