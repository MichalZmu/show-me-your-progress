import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';
import { TaskItemModel } from '../../interfaces/task-item.model';
import { Store } from '@ngrx/store';
import { addTask } from '../../states/tasks/tasks.actions';

@Component({
    selector: 'app-add-task-modal',
    templateUrl: './add-task-modal.component.html',
    styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {
    newTask: TaskItemModel;

    constructor(
        public activeModal: NgbActiveModal,
        private taskService: TaskService,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.newTask = new TaskItemModel();
    }

    onSubmit(): void {
        this.taskService.addTask(this.newTask).subscribe((data) => {
            console.log(data);
            this.store.dispatch(addTask({ task: this.newTask }));
            this.store.subscribe((store) =>
                console.log('store po dodaniu: ', store)
            );
            this.activeModal.close();
        });
    }
}
