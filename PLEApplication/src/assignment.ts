export class Assignment {
    constructor(
        public assignmentID: number,
        public title: string,
        public description: string,
        public createdDate: Date,
        public mustDeliveryDate: Date,
    )
    {}
}