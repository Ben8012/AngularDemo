
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FRegister } from './forms/register.form';
import { SessionService } from '../../modules/security/services/session.service';
import { AuthService } from '../../modules/security/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private formRegister: FormGroup = FRegister();

  get FormRegister(): FormGroup { return this.formRegister; }

  constructor(
    private $session: SessionService<{ id: number, label: string }>,
    private $auth: AuthService,

      ) { }

  handleSubmitAction(){
    if (this.formRegister.valid) {
      //const {email, password, username} = this.formRegister.value;
      this.$auth.register(this.formRegister.value);
    }
  }
}
