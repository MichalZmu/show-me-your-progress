import {Component, OnInit} from '@angular/core';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../services/task.service';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: TaskItemModel;
  readOnly = true;

  constructor(private activatedRoute: ActivatedRoute,
              private taskService: TaskService,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigationService.setGoBackUrl('/');
    this.activatedRoute.queryParams.subscribe((params) => {
      this.getTask(params.taskId);
    });
  }

  getTask(id: string): void {
    this.taskService.getTask(id).subscribe(task => {
      console.log('getTask: ', task);
      this.task = task[0];
    });
  }

  editData(flag: boolean): void {
    this.readOnly = !flag;
  }

  updateData(): void {
    this.taskService.updateTask(this.task).subscribe((data => {
      console.log(data);
    }));
  }

}
