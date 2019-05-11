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
var courses_service_1 = require("../courses.service");
var course_1 = require("../course");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(_coursesService) {
        this._coursesService = _coursesService;
        this.courseId = window.location.pathname.split('/')[3].toString();
        this.getCourse();
    }
    CoursesComponent.prototype.getCourseId = function () {
        return this.courseId;
    };
    CoursesComponent.prototype.getCourse = function () {
        var _this = this;
        this._coursesService.getCourse(this.courseId)
            .map(function (course) {
            var result;
            if (course) {
                result = new course_1.Course(course.CourseID, course.CourseCode, course.CourseDescription, course.CourseName, course.DateCreated, course.IsCurrentlyAvailable, course.NeedApproval, course.ParticipatorCount);
            }
            return result;
        })
            .subscribe(function (data) {
            _this.currentCourse = data;
        }, function (err) { return console.log(err); });
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            templateUrl: '/src/Courses/courses.component.html',
            providers: [courses_service_1.CoursesService]
        }),
        __metadata("design:paramtypes", [courses_service_1.CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map