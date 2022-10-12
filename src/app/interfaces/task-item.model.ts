import { TaskStatuses } from './task-statuses'

export class TaskItemModel {
    _id: string
    name: string
    description: string
    status: TaskStatuses

    constructor(name: string = '', description: string = '') {
        this._id = null
        this.name = name
        this.description = description
        this.status = TaskStatuses.ToDo
    }
}
