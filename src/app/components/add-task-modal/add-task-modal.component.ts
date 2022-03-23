import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../../services/task.service';
import {TaskItemModel} from '../../interfaces/task-item.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent implements OnInit {
  newTask: TaskItemModel;

  constructor(public activeModal: NgbActiveModal, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.newTask = new TaskItemModel();
  }

  onSubmit(): void {
    this.taskService.addTask(this.newTask).subscribe(data => console.log(data));

    this.activeModal.close();
  }
}
