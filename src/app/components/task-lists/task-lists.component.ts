import {Component, OnInit} from '@angular/core';
import {TaskItem} from '../../interfaces/task-item';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {
  taskList: TaskItem[];

  constructor(private modalService: NgbModal, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  openModal(): void {
    this.modalService.open(AddTaskModalComponent);
  }
}
