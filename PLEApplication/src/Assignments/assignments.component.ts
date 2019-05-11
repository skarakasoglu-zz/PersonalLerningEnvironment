import { Component } from '@angular/core';
import { Assignment } from '../assignment';
import { AssignmentsService } from '../assignments.service';
import { CoursesComponent } from '../Courses/courses.component';

@Component({
    selector: 'app-homeworks',
    templateUrl: '/src/Assignments/assignments.component.html',
    providers: [AssignmentsService]
})
export class AssignmentsComponent {

    public assignmentList: Array<Assignment> = [];
    courseId: string;

    constructor(private _assignmentService: AssignmentsService, private _courseComponent: CoursesComponent)
    {
        this.courseId = this._courseComponent.getCourseId();
        this.getAssignments();
    }

    getAssignments() {
        this._assignmentService.getAssignments(this.courseId)
            .map((assignmentList: Array<any>) => {
                let result: Array<Assignment> = [];
                if (assignmentList) {
                    assignmentList.forEach(assignment => {
                        result.push(
                            new Assignment(
                                assignment.AssignmentID,
                                assignment.Title,
                                assignment.Description,
                                assignment.CreatedDate,
                                assignment.MustDeliveryDate));
                    });
                }
                return result;
            }
            )
            .subscribe(
            data => {
                this.assignmentList = data;
            },
            err => console.log(err)
            );
    }
}