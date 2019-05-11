"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grade_service_1 = require("../grade.service");
var grade_1 = require("../grade");
var courses_component_1 = require("../Courses/courses.component");
var members_component_1 = require("../Members/members.component");
var assignments_component_1 = require("../Assignments/assignments.component");
var GradesComponent = /** @class */ (function () {
    function GradesComponent(gradeService, _courseComponent, _membersComponent, _assignmentComponent) {
        this.gradeService = gradeService;
        this._courseComponent = _courseComponent;
        this._membersComponent = _membersComponent;
        this._assignmentComponent = _assignmentComponent;
        this.userList = [];
        this.gradeList = [];
        this.assignmentList = [];
        this.courseId = this._courseComponent.getCourseId();
        this.userList = this._membersComponent.userList;
        this.assignmentList = this._assignmentComponent.assignmentList;
    }
    GradesComponent.prototype.ngOnInit = function () {
        this.getGrades();
        console.log(this.userList);
    };
    GradesComponent.prototype.getGrades = function () {
        var _this = this;
        this.gradeService.getGrades(this.courseId)
            .map(function (gradeList) {
            var result = [];
            if (gradeList) {
                gradeList.forEach(function (grade) {
                    result.push(new grade_1.Grade(grade.GradeID, grade.AssignmentID, grade.UserID, grade.Points));
                });
            }
            return result;
        })
            .subscribe(function (data) {
            _this.gradeList = data;
        }, function (err) { return console.log(err); });
    };
    GradesComponent = __decorate([
        core_1.Component({
            selector: 'app-grades',
            templateUrl: '/src/Grades/grades.component.html',
            providers: [grade_service_1.GradeService]
        }),
        __metadata("design:paramtypes", [grade_service_1.GradeService, courses_component_1.CoursesComponent, members_component_1.MembersComponent,
            assignments_component_1.AssignmentsComponent])
    ], GradesComponent);
    return GradesComponent;
}());
exports.GradesComponent = GradesComponent;
//# sourceMappingURL=grades.component.js.map