"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var assignments_component_1 = require("./Assignments/assignments.component");
var grades_component_1 = require("./Grades/grades.component");
var grade_service_1 = require("./grade.service");
var user_service_1 = require("./user.service");
var courses_component_1 = require("./Courses/courses.component");
var members_component_1 = require("./Members/members.component");
var assignments_service_1 = require("./assignments.service");
var courses_service_1 = require("./courses.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: courses_component_1.CoursesComponent },
                    { path: 'Assingments', component: assignments_component_1.AssignmentsComponent },
                    { path: 'Grades', component: grades_component_1.GradesComponent },
                    { path: 'Members', component: members_component_1.MembersComponent }
                ]),
                forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, courses_component_1.CoursesComponent, members_component_1.MembersComponent, assignments_component_1.AssignmentsComponent, grades_component_1.GradesComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService, courses_service_1.CoursesService, assignments_service_1.AssignmentsService, grade_service_1.GradeService, courses_component_1.CoursesComponent, assignments_component_1.AssignmentsComponent, members_component_1.MembersComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map