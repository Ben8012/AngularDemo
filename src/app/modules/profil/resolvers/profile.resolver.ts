import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../../security/services/session.service';


@Injectable({
  providedIn: 'root'
})
export class ProfilResolver implements Resolve<any> {

  private user: any|null = null;

    constructor(
        private $session: SessionService<{ id: number }>,
        private $http : HttpClient
    ) {
        this.$session.subscribe(user => this.user = user)
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.$http.get<any>(`http://localhost:3000/users/`+this.user.id);
    }
}
