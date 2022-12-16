import { FProfil } from './forms/profil.form';
import { Component } from '@angular/core';
import { SessionService } from '../../modules/security/services/session.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {

  private userSessionId: number | null = null;

  private formProfil: FormGroup = FProfil();
  get FormProfil(): FormGroup { return this.formProfil; }

  constructor(
    private $session: SessionService<any>,
    private $http: HttpClient,
    private $route : ActivatedRoute
    )
  {
  }

  ngOnInit() {
    this.$route.data.subscribe(({profile}) => {
      this.formProfil.patchValue(profile);
      this.userSessionId = profile.id;
    })
  }

  handleSubmitAction() {
    if (this.formProfil.valid ) {
      console.log(this.formProfil.value)
      console.log(this.userSessionId)
      this.$http.put<any>(`http://localhost:3000/users/${this.userSessionId}`, this.formProfil.value)
        .subscribe(user => console.log(user));
        //this.$route.navigate(['/home'])
    }
  }

}
