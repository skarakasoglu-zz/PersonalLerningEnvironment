import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';
import { Grade } from '../grade';
import { User } from '../user';
import { Observable } from 'rxjs/Rx';
import { CoursesComponent } from '../Courses/courses.component';
import { MembersComponent } from '../Members/members.component';
import { AssignmentsComponent } from '../Assignments/assignments.component';
import { Assignment } from '../assignment';

@Component({
    selector: 'app-grades',
    templateUrl: '/src/Grades/grades.component.html',
    providers: [GradeService]
})
export class GradesComponent {
    userList: Array<User> = [];
    gradeList: Array<Grade> = [];
    assignmentList: Array<Assignment> = [];
    courseId: string;

    constructor(private gradeService: GradeService, private _courseComponent: CoursesComponent, private _membersComponent: MembersComponent,
            private _assignmentComponent: AssignmentsComponent) {
        this.courseId = this._courseComponent.getCourseId();
        this.userList = this._membersComponent.userList;
        this.assignmentList = this._assignmentComponent.assignmentList;
    }

    ngOnInit() {
        this.getGrades();
        console.log(this.userList);
    }

    getGrades() {
        this.gradeService.getGrades(this.courseId)
            .map((gradeList: Array<any>) => {
                let result: Array<Grade> = [];
                if (gradeList) {
                    gradeList.forEach(grade => {
                        result.push(
                            new Grade(
                                grade.GradeID,
                                grade.AssignmentID,
                                grade.UserID,
                                grade.Points));
                    });
                }
                return result;
            }
            )
            .subscribe(
                data => {
                    this.gradeList = data;
                },
                err => console.log(err)
            );
    }
}