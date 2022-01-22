import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from '../../interfaces/task-item';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TaskDetailsModalComponent} from '../task-details-modal/task-details-modal.component';
import {TaskItemModel} from '../../interfaces/task-item.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskItem;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openTaskDetails(task: TaskItemModel): void {
    const modalRef = this.modalService.open(TaskDetailsModalComponent, {
      size: 'xl'
    });
    modalRef.componentInstance.task = task;
  }
}
