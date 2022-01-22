import { Injectable } from '@angular/core';
import {TaskItem} from '../interfaces/task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: TaskItem[] = [
    {
      name: 'Dni bez papierosów',
      description: '',
      taskCompletionLevel: 22
    },
    {
      name: 'Dni bez alkoholu',
      description: '',
      taskCompletionLevel: 10
    }
  ];

  constructor() { }

  getTasks(): TaskItem[] {
    return this.taskList;
  }

  addTask(task: TaskItem): void {
    this.taskList.push(task);
  }
}
