import {Component, OnInit} from '@angular/core';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../../services/task.service';
import {NavigationService} from '../../services/navigation.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: TaskItemModel;
  readOnly = true;

  constructor(private activatedRoute: ActivatedRoute,
              private taskService: TaskService,
              private navigationService: NavigationService,
              private router: Router,
              private store: Store) {
  }

  ngOnInit(): void {
    this.navigationService.setGoBackUrl('/');
    this.activatedRoute.queryParams.subscribe((params) => {
      this.getTask(params.taskId);
    });
  }

  getTask(id: string): void {
    this.store.subscribe(data => {
      this.task = data.tasks.find(elem => elem._id === id);
    });
  }

  editData(flag: boolean): void {
    this.readOnly = !flag;
  }

  updateData(): void {
    this.taskService.updateTask(this.task).subscribe((data => {
      console.log(data);
    }));
  }

  deleteData(): void {
    this.taskService.deleteTask(this.task).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/').then();
    });
  }

}
