import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { IdentityService } from '../identity/identity.service';
import { User } from '../../interfaces/user/user' ;

@Injectable()
export class UserService {

  constructor(private http: Http,
              private identityService: IdentityService) { }

   getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.identityService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }

}
