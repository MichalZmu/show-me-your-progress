import { Component, Input, OnInit } from '@angular/core';
import { TaskItemModel } from '../../interfaces/task-item.model';
import { Router } from '@angular/router';
import { TaskStatuses } from '../../interfaces/task-statuses';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';
import {
    deleteTask,
    setNumberOfTasksFinishedToday,
    updateTask,
} from '../../states/tasks/tasks.actions';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
    @Input() task: TaskItemModel;
    taskStatus: string;
    showStatusButtonInProgress = false;
    showStatusButtonDone = false;
    showStatusButtonToDo = false;
    taskStatuses = TaskStatuses;

    constructor(
        private router: Router,
        private taskService: TaskService,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.taskStatus = TaskStatuses[this.task.status];
        this.initialButtons();
    }

    goToTaskDetails(): void {
        this.router
            .navigate(['/task-details'], {
                queryParams: { taskId: this.task._id },
            })
            .then();
    }

    initialButtons(): void {
        switch (this.task.status) {
            case TaskStatuses.ToDo:
                this.showStatusButtonDone = true;
                this.showStatusButtonInProgress = true;
                break;
            case TaskStatuses.InProgress:
                this.showStatusButtonDone = true;
                this.showStatusButtonToDo = true;
                break;
        }
    }

    changeStatus(status: number): void {
        const updatedTask = JSON.parse(
            JSON.stringify(this.task)
        ) as TaskItemModel;
        updatedTask.status = status;

        this.taskService
            .updateTask(updatedTask)
            .pipe(
                switchMap((data) =>
                    this.taskService.getNumberOfTaskFinishedToday()
                )
            )
            .subscribe((tasks) => {
                this.store.dispatch(updateTask({ task: updatedTask }));
                this.store.dispatch(
                    setNumberOfTasksFinishedToday({
                        numberOfTasks: tasks.length,
                    })
                );
            });
    }

    deleteTask(task: TaskItemModel): void {
        this.taskService.deleteTask(this.task).subscribe(() => {
            this.store.dispatch(deleteTask({ task }));
        });
    }
}
