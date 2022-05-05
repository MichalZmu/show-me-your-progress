import {Component, OnInit} from '@angular/core';
import {TaskItemModel} from '../../interfaces/task-item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../../services/task.service';
import {NavigationService} from '../../services/navigation.service';
import {Store} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

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

    this.activatedRoute.queryParams.pipe(switchMap(params => this.getTask(params.taskId)))
      .subscribe(data => {
        this.task = data;
      });
  }

  getTask(id: string): Observable<any> {
    return this.store.pipe(map((data: {tasks: [{_id: any}]}) => data.tasks.find(elem => elem._id === id)));
  }

  editData(flag: boolean): void {
    this.readOnly = !flag;
  }

  updateData(): void {
    this.taskService.updateTask(this.task).subscribe();
  }

  deleteData(): void {
    this.taskService.deleteTask(this.task).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/').then();
    });
  }

}
