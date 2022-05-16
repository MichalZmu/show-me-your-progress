import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';
import {TaskService} from '../../services/task.service';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {NavigationService} from '../../services/navigation.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Store} from '@ngrx/store';
import {getTasks} from '../../states/tasks/tasks.actions';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {
  taskList: TaskItemModel[];

  constructor(private modalService: NgbModal,
              private taskService: TaskService,
              private navigationService: NavigationService,
              private spinner: NgxSpinnerService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.spinner.show().then();
    this.navigationService.setGoBackUrl(null);
    this.taskService.getTasks().subscribe(tasks => {
      this.taskList = tasks;
      localStorage.clear();
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.store.dispatch(getTasks({tasks}));
      this.spinner.hide().then();
    });
    this.store.subscribe((data: { tasks: TaskItemModel[] }) => {
      this.taskList = data.tasks;
    });
  }

  openModal(): void {
    this.modalService.open(AddTaskModalComponent);
  }
}
