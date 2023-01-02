import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';
import { setNumberOfTasksFinishedToday } from '../../states/tasks/tasks.actions';
import { selectNumberOfTask } from '../../states/tasks/tasks.selectors';

@Component({
    selector: 'app-task-stats',
    templateUrl: './task-stats.component.html',
    styleUrls: ['./task-stats.component.scss'],
})
export class TaskStatsComponent implements OnInit {
    numberOfTaskFinishedToday: number;

    constructor(private taskService: TaskService, private store: Store) {}

    ngOnInit(): void {
        this.taskService.getNumberOfTaskFinishedToday().subscribe((data) => {
            this.numberOfTaskFinishedToday = data.length;
            this.store.dispatch(
                setNumberOfTasksFinishedToday({ numberOfTasks: data.length })
            );
        });

        this.store.select(selectNumberOfTask).subscribe((data) => {
            this.numberOfTaskFinishedToday = data;
        });
    }
}
