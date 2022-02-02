import { Injectable } from '@angular/core';
import {TaskItemModel} from '../interfaces/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: TaskItemModel[] = [
    {
      id: 0,
      name: 'Dni bez papierosów',
      description: '',
      taskCompletionLevel: 22
    },
    {
      id: 1,
      name: 'Dni bez alkoholu',
      description: '',
      taskCompletionLevel: 10
    }
  ];

  constructor() { }

  getTasks(): TaskItemModel[] {
    return this.taskList;
  }

  getTask(id: number): TaskItemModel {
    return this.taskList.find(item => item.id === id) || null;
  }

  addTask(task: TaskItemModel): void {
    this.taskList.push(task);
  }
}
