export class Grade {
    constructor(
        public gradeID: number,
        public assignmentID: number,
        public userID: string,
        public points: number
    ) {}
}