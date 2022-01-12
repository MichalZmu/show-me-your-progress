import {Component, OnInit} from '@angular/core';
import {TaskItem} from '../../interfaces/task-item';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {
  taskList: TaskItem[] = [
    {
      name: 'Dni bez papierosów',
      taskCompletionLevel: 22
    },
    {
      name: 'Dni bez alkoholu',
      taskCompletionLevel: 10
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
