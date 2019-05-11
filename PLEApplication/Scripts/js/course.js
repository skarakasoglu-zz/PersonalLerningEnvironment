"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(courseID, courseCode, courseDescription, courseName, dateCreated, isCurrentlyAvailable, needApproval, participatorCount) {
        this.courseID = courseID;
        this.courseCode = courseCode;
        this.courseDescription = courseDescription;
        this.courseName = courseName;
        this.dateCreated = dateCreated;
        this.isCurrentlyAvailable = isCurrentlyAvailable;
        this.needApproval = needApproval;
        this.participatorCount = participatorCount;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.js.map