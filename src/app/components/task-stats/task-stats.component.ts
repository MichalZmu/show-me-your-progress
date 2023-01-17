import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';
import { setNumberOfTasksFinishedToday } from '../../states/tasks/tasks.actions';
import { selectNumberOfTask } from '../../states/tasks/tasks.selectors';
import { NumberOfTasksPlannedForToday } from '../../interfaces/number-of-tasks-planned-for-today';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-task-stats',
    templateUrl: './task-stats.component.html',
    styleUrls: ['./task-stats.component.scss'],
})
export class TaskStatsComponent implements OnInit {
    numberOfTaskFinishedToday: number;
    goalForToday: NumberOfTasksPlannedForToday = { quantity: 0, _id: '' };
    editMode = false;

    constructor(
        private taskService: TaskService,
        private store: Store,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.taskService.getNumberOfTaskFinishedToday().subscribe((data) => {
            this.numberOfTaskFinishedToday = data.length;
            this.store.dispatch(
                setNumberOfTasksFinishedToday({ numberOfTasks: data.length })
            );
        });

        this.taskService.getNumberOfTasksPlannedForToday().subscribe((data) => {
            this.goalForToday = data;
        });

        this.store.select(selectNumberOfTask).subscribe((data) => {
            this.numberOfTaskFinishedToday = data;
        });
    }

    setGoalForToday(): void {
        if (this.goalForToday.quantity < 0) {
            this.snackBar.open('Must be greater than or equal to 0', 'close');
            this.goalForToday.quantity = 0;
        } else {
            this.taskService
                .setNumberOfTasksPlannedForToday(this.goalForToday)
                .subscribe();
        }
    }
}
