import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { merge, Observable, mergeMap, first, single, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private $http: HttpClient,
        private $session: SessionService<{user: any, accessToken: string}>
    ) { }

    login(params: any) {
        return this.$http.post<any>(`http://localhost:3000/login`, params).subscribe(data => this.$session.open(data.user.id, data.user.username));
    }

    register(user: any) {
        this.$http.post<any>(`http://localhost:3000/register`, user).subscribe(({user, accessToken}) => this.$session.open(user.id, user.username))
    }
}
