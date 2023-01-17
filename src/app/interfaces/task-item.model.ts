import { TaskStatuses } from './task-statuses';

export class TaskItemModel {
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    description: string;
    status: TaskStatuses;
    finishedDate?: Date;

    constructor(name: string = '', description: string = '') {
        this._id = null;
        this.name = name;
        this.description = description;
        this.status = TaskStatuses.ToDo;
        this.finishedDate = null;
    }
}
