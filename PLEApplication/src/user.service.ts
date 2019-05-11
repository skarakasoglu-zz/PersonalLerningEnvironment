import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from './user';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    getUsers(courseId: string): Observable<User[]> {
        return this._http.get('http://localhost:63234/api/Users/' + courseId)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}