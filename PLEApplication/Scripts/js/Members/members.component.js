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
var user_1 = require("../user");
var courses_component_1 = require("../Courses/courses.component");
var user_service_1 = require("../user.service");
var MembersComponent = /** @class */ (function () {
    function MembersComponent(_courseComponent, _userService) {
        this._courseComponent = _courseComponent;
        this._userService = _userService;
        this.userList = [];
        this._courseID = "";
        this._courseID = this._courseComponent.getCourseId();
        this.getUsers();
    }
    MembersComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers(this._courseID)
            .map(function (userList) {
            var result = [];
            if (userList) {
                userList.forEach(function (user) {
                    result.push(new user_1.User(user.UserID, user.FullName, user.Email));
                });
            }
            return result;
        })
            .subscribe(function (data) {
            _this.userList = data;
        }, function (err) { return console.log(err); });
    };
    MembersComponent = __decorate([
        core_1.Component({
            selector: 'app-members',
            templateUrl: '/src/members/members.component.html',
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [courses_component_1.CoursesComponent, user_service_1.UserService])
    ], MembersComponent);
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;
//# sourceMappingURL=members.component.js.map