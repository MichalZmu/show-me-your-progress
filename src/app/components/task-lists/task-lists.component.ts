import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';
import {TaskService} from '../../services/task.service';
import {TaskItemModel} from '../../interfaces/task-item.model';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {
  taskList: TaskItemModel[];

  constructor(private modalService: NgbModal, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  openModal(): void {
    this.modalService.open(AddTaskModalComponent);
  }
}
