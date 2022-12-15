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

  constructor(private $session: SessionService<{ id: number, label: string }>, private $auth: AuthService, ) { }

  handleSubmitAction(){
    if (this.formLogin.valid) {
      const {email, password} = this.formLogin.value;
      this.$auth.login({email, password});
    }
  }

}
