import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TaskService} from '../../services/task.service';
import * as tasksActions from '../tasks/tasks.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class TasksEffects {

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  getTasks$ = createEffect(() => this.actions$.pipe(
        ofType(tasksActions.getTasks),
        exhaustMap(action =>
          this.taskService.getTasks().pipe(
            map(response => {
              console.log('response:::', response);
              return tasksActions.getTasksSuccess({response});
            }),
            catchError((error: any) => of(tasksActions.getTasksFailure(error))))
        )
      ));
}
