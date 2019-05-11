import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Course } from './course';

@Injectable()
export class CoursesService {
    constructor(private _http: Http) { }

    getCourse(courseID: string): Observable<Course[]> {
        return this._http.get('http://localhost:63234/api/CourseDetail/' + courseID)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}