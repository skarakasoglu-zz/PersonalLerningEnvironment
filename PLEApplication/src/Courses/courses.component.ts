import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../course';

@Component({
    selector: 'app-courses',
    templateUrl: '/src/Courses/courses.component.html',
    providers: [CoursesService]
})
export class CoursesComponent {
    private courseId: string = window.location.pathname.split('/')[3].toString();
    private currentCourse: Course;

    constructor(private _coursesService: CoursesService) {
        this.getCourse();
    }

    getCourseId(): string {
        return this.courseId;
    }

    getCourse() {
        this._coursesService.getCourse(this.courseId)
            .map((course: any) => {
                let result: Course;
                if (course) {
                    result = new Course(
                        course.CourseID,
                        course.CourseCode,
                        course.CourseDescription,
                        course.CourseName,
                        course.DateCreated,
                        course.IsCurrentlyAvailable,
                        course.NeedApproval,
                        course.ParticipatorCount
                    );
                }
                return result;
            }
            )
            .subscribe(
            data => {
                this.currentCourse = data;
            },
            err => console.log(err)
            );
    }
}