export class TaskItemModel {
  name: string;
  description: string;
  taskCompletionLevel?: number;

  constructor(name: string = '', description: string = '') {
    this.name = name;
    this.description = description;
    this.taskCompletionLevel = 0;
  }
}
