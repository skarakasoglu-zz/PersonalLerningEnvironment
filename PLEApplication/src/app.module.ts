import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AssignmentsComponent } from './Assignments/assignments.component';
import { GradesComponent } from './Grades/grades.component';
import { GradeService } from './grade.service';
import { UserService } from './user.service';
import { CoursesComponent } from './Courses/courses.component';
import { MembersComponent } from './Members/members.component';
import { AssignmentsService } from './assignments.service';
import { CoursesService } from './courses.service';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: CoursesComponent },
            { path: 'Assingments', component: AssignmentsComponent },
            { path: 'Grades', component: GradesComponent },
            { path: 'Members', component: MembersComponent }
        ]),
        FormsModule, HttpModule],
    declarations: [AppComponent, CoursesComponent, MembersComponent, AssignmentsComponent, GradesComponent],
    bootstrap: [AppComponent],
    providers: [UserService, CoursesService, AssignmentsService, GradeService, CoursesComponent, AssignmentsComponent, MembersComponent]
})
export class AppModule { }