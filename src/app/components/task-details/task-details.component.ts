import { Component, OnInit } from '@angular/core';
import { TaskItemModel } from '../../interfaces/task-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { NavigationService } from '../../services/navigation.service';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TaskStatuses } from '../../interfaces/task-statuses';
import { AppState } from '../../states/app.state';
import { deleteTask, updateTask } from '../../states/tasks/tasks.actions';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task: TaskItemModel;
  readOnly = true;
  readonly statuses = Object.values(TaskStatuses).slice(0, 3);

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private navigationService: NavigationService,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.navigationService.setGoBackUrl('/');

    this.activatedRoute.queryParams
      .pipe(switchMap((params) => this.getTask(params.taskId)))
      .subscribe((data: TaskItemModel) => {
        this.task = data;
      });
  }

  getTask(id: string): any {
    return this.taskService.getTask(id);
  }

  editData(flag: boolean): void {
    this.readOnly = !flag;
  }

  updateData(readOnly = true): void {
    this.taskService.updateTask(this.task).subscribe(() => {
      this.store.dispatch(updateTask({task: this.task}));
    });
    if (readOnly) {
      this.readOnly = true;
    }
  }

  deleteData(): void {
    this.taskService.deleteTask(this.task).subscribe((data) => {
      this.store.dispatch(deleteTask({task: this.task}));
      this.router.navigateByUrl('/').then();
    });
  }
}
