export class Course {
    constructor(
        public courseID: number,
        public courseCode: string,
        public courseDescription: string,
        public courseName: string,
        public dateCreated: Date,
        public isCurrentlyAvailable: boolean,
        public needApproval: boolean,
        public participatorCount: number
    )
    {}
}