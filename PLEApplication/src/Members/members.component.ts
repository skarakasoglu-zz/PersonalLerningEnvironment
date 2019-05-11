import { Component } from '@angular/core';
import { User } from '../user';
import { CoursesComponent } from '../Courses/courses.component';
import { UserService } from '../user.service';

@Component({
    selector: 'app-members',
    templateUrl: '/src/members/members.component.html',
    providers: [UserService]
})
export class MembersComponent {
    public userList: Array<User> = [];
    private _courseID = "";
    constructor(private _courseComponent: CoursesComponent, private _userService: UserService)
    {
        this._courseID = this._courseComponent.getCourseId();
        this.getUsers();
    }

    getUsers() {
        this._userService.getUsers(this._courseID)
            .map((userList: Array<any>) => {
                let result: Array<User> = [];
                if (userList) {
                    userList.forEach(user => {
                        result.push(
                            new User(
                                user.UserID,
                                user.FullName,
                                user.Email));
                    });
                }
                return result;
            }
            )
            .subscribe(
            data => {
                this.userList = data;
            },
            err => console.log(err)
            );
    }
}