import {Component, Input, OnInit} from '@angular/core';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskItemModel;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToTaskDetails(): void {
    this.router.navigate(['/task-details'], {queryParams: {taskId: this.task.id}}).then();
  }
}
