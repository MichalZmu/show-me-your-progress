import {Component, Input, OnInit} from '@angular/core';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {Router} from '@angular/router';
import {TaskStatuses} from '../../interfaces/task-statuses';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskItemModel;
  taskStatus: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.taskStatus = TaskStatuses[this.task.status];
  }

  goToTaskDetails(): void {
    this.router.navigate(['/task-details'], {queryParams: {taskId: this.task._id}}).then();
  }
}
