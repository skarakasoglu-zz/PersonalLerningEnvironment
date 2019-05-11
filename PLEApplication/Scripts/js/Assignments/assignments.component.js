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
var assignment_1 = require("../assignment");
var assignments_service_1 = require("../assignments.service");
var courses_component_1 = require("../Courses/courses.component");
var AssignmentsComponent = /** @class */ (function () {
    function AssignmentsComponent(_assignmentService, _courseComponent) {
        this._assignmentService = _assignmentService;
        this._courseComponent = _courseComponent;
        this.assignmentList = [];
        this.courseId = this._courseComponent.getCourseId();
        this.getAssignments();
    }
    AssignmentsComponent.prototype.getAssignments = function () {
        var _this = this;
        this._assignmentService.getAssignments(this.courseId)
            .map(function (assignmentList) {
            var result = [];
            if (assignmentList) {
                assignmentList.forEach(function (assignment) {
                    result.push(new assignment_1.Assignment(assignment.AssignmentID, assignment.Title, assignment.Description, assignment.CreatedDate, assignment.MustDeliveryDate));
                });
            }
            return result;
        })
            .subscribe(function (data) {
            _this.assignmentList = data;
        }, function (err) { return console.log(err); });
    };
    AssignmentsComponent = __decorate([
        core_1.Component({
            selector: 'app-homeworks',
            templateUrl: '/src/Assignments/assignments.component.html',
            providers: [assignments_service_1.AssignmentsService]
        }),
        __metadata("design:paramtypes", [assignments_service_1.AssignmentsService, courses_component_1.CoursesComponent])
    ], AssignmentsComponent);
    return AssignmentsComponent;
}());
exports.AssignmentsComponent = AssignmentsComponent;
//# sourceMappingURL=assignments.component.js.map