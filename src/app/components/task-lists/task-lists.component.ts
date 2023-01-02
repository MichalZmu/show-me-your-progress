import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { TaskService } from '../../services/task.service';
import { TaskItemModel } from '../../interfaces/task-item.model';
import { NavigationService } from '../../services/navigation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { setTasks } from '../../states/tasks/tasks.actions';
import { TaskState } from '../../states/app.state';
import { selectTasks } from '../../states/tasks/tasks.selectors';

@Component({
    selector: 'app-task-lists',
    templateUrl: './task-lists.component.html',
    styleUrls: ['./task-lists.component.scss'],
})
export class TaskListsComponent implements OnInit {
    taskList: TaskItemModel[];

    constructor(
        private modalService: NgbModal,
        private taskService: TaskService,
        private navigationService: NavigationService,
        private spinner: NgxSpinnerService,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.spinner.show().then();
        this.navigationService.setGoBackUrl(null);
        this.taskService.getTasks().subscribe((tasks) => {
            localStorage.clear();
            localStorage.setItem('tasks', JSON.stringify(tasks));
            this.store.dispatch(setTasks({ tasks }));
            this.spinner.hide().then();
            this.taskList = tasks;
        });

        this.store.select(selectTasks).subscribe((data) => {
            this.taskList = data;
        });
    }

    openModal(): void {
        this.modalService.open(AddTaskModalComponent);
    }
}
