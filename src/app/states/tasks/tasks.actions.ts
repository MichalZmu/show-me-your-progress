import {createAction, props} from '@ngrx/store';
import {TaskItemModel} from '../../interfaces/task-item.model';

export const getTasks = createAction('[Tasks] Get tasks',  props<{ tasks: ReadonlyArray<TaskItemModel> }>());

export const getTasksSuccess = createAction(
  '[Task] Get Tasks Success',
  props<any>()
);

export const getTasksFailure = createAction(
  '[Task] Get Tasks Failure',
  props<{ any }>()
);

