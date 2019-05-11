import { Component } from '@angular/core';
import { MembersComponent } from './Members/members.component';
import { AssignmentsComponent } from './Assignments/assignments.component';

@Component({
    selector: 'my-app',
    templateUrl: '/src/app.component.html'
})
export class AppComponent {
    constructor(private _memberComponent: MembersComponent, private _assignmentComponent: AssignmentsComponent) {

    }
}