import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TaskItemModel} from '../../interfaces/task-item.model';

@Component({
  selector: 'app-task-details-modal',
  templateUrl: './task-details-modal.component.html',
  styleUrls: ['./task-details-modal.component.scss']
})
export class TaskDetailsModalComponent implements OnInit {
  @Input() task: TaskItemModel;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
