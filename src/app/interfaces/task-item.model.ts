export class TaskItemModel {
  id: number;
  name: string;
  description: string;
  taskCompletionLevel?: number;

  constructor(name: string = '', description: string = '') {
    this.id = null;
    this.name = name;
    this.description = description;
    this.taskCompletionLevel = 0;
  }
}
