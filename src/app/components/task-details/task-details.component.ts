import {Component, Input, OnInit} from '@angular/core';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {ActivatedRoute} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: TaskItemModel;
  taskId: number;
  readOnly = true;

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('params: ', params);
      this.getTask(params.taskId);
    });
  }

  getTask(id: number): void {
    this.task = this.taskService.getTask(+id);
    console.log('this.task: ', this.task);
  }

  editData(flag: boolean): void {
    this.readOnly = !flag;
  }

}
