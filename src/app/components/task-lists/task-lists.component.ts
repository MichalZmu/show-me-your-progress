import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';
import {TaskService} from '../../services/task.service';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {NavigationService} from '../../services/navigation.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Store} from '@ngrx/store';
import {getTasks} from '../../states/tasks/tasks.actions';
import {selectTasks} from '../../states/tasks/tasks.selectors';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {
  taskList: TaskItemModel[];
  books$ = this.store.select(selectTasks);

  constructor(private modalService: NgbModal,
              private taskService: TaskService,
              private navigationService: NavigationService,
              private spinner: NgxSpinnerService,
              private store: Store) {
  }

  ngOnInit(): void {
    // this.spinner.show().then();
    this.navigationService.setGoBackUrl(null);
    this.taskService.getTasks().subscribe(tasks => {
      this.taskList = tasks;
      this.store.dispatch(getTasks({ tasks }));
      this.spinner.hide().then();
    });
  }

  openModal(): void {
    this.modalService.open(AddTaskModalComponent);
  }
}
