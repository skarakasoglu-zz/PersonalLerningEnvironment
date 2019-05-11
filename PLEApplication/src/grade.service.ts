import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Grade } from './grade';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class GradeService {
    constructor(private _http: Http)
    { }

    getGrades(courseID: string): Observable<Grade[]> {
        return this._http.get('http://localhost:63234/api/Grades/' + courseID)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}