export class TaskItemModel {
  _id: string;
  name: string;
  description: string;
  taskCompletionLevel?: number;

  constructor(name: string = '', description: string = '') {
    this._id = null;
    this.name = name;
    this.description = description;
    this.taskCompletionLevel = 0;
  }
}
